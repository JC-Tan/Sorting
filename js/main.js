let arraySize = document.getElementById("arraySize");
let dlySpd = document.getElementById("delaySpd");
let sizeVal = document.getElementById("sizeVal");
let delVal = document.getElementById("delayVal");
let buttons = document.querySelectorAll(".btnContainer button");
let s = new Sorting(arraySize.value);


$(document).ready(function () {
    main();
});


function main() {
    arraySize.addEventListener("input", changeArraySize);
    dlySpd.addEventListener("input", changeDelay)
    clickButtons();
    window.onload = changeArraySize();
    window.onload = changeDelay();
    sizeVal.innerHTML = arraySize.value;
    delVal.innerHTML = dlySpd.value;
}


arraySize.oninput = function () {
    sizeVal.innerHTML = this.value;
}

dlySpd.oninput = function () {
    delVal.innerHTML = this.value;
}


function clickButtons() {
    $("#newBtn").click(function () {
        s.generateArray();
    });

    $("#insBtn").click(function () {
        // s.generateArray();
        s.insertionSort();
    });

    $("#selBtn").click(function () {
        // s.generateArray();
        s.selectionSort();
    });

    $("#merBtn").click(function () {
        // s.generateArray();
        s.mergeSort();
    });

    $("#bubBtn").click(function () {
        // s.generateArray();
        s.bubbleSort();
    });

    $("#qckBtn").click(function () {
        // s.generateArray();
        s.quickSort();
    });
}


function changeArraySize() {
    s.updateArray(arraySize.value);
}

function changeDelay() {
    console.log("Delay changed");
    s.setDelay = dlySpd.value;
}

function genNewArray() {
    s.generateArray();
}
