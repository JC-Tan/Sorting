let arraySize = document.getElementById("arraySize");
let dlySpd = document.getElementById("delaySpd");
let sizeVal = document.getElementById("sizeVal");
let delVal = document.getElementById("delayVal");
let buttons = document.querySelectorAll(".btnContainer button");
let s = new Sorting(arraySize.value);
let command;

let GEN = "GENERATE_ARRAY";
let INS = "INSERTION";
let SEL = "SELECTION";
let MER = "MERGE";
let BUB = "BUBBLE";
let QCK = "QUICK";
let PLY = "PLAY";



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
        genNewArray();
    });

    $("#insBtn").click(function () {
        command = INS;
    });

    $("#selBtn").click(function () {
        command = SEL;
    });

    $("#merBtn").click(function () {
        command = MER;
    });

    $("#bubBtn").click(function () {
        command = BUB;
    });

    $("#qckBtn").click(function () {
        command = QCK;
    });

    $("#playBtn").click(function () {
        executeCommand();
    });

}


function changeArraySize() {
    s.updateArray(arraySize.value);
}

function changeDelay() {
    // console.log("Delay changed");
    s.setDelay = dlySpd.value;
}

function genNewArray() {
    // console.log("Here");
    s.generateArray();
}

function executeCommand() {
    if (command === INS) {
        console.log(command);
        s.insertionSort();
    }
    else if (command === SEL) {
        console.log(command);
        s.selectionSort();
    }
    else if (command === BUB) {
        s.bubbleSort();
    }
    else if (command === MER) {
        s.mergeSort();
    }
    else if (command === QCK) {
        s.quickSort();
    }
}