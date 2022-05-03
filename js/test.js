let arraySize = document.getElementById('arraySize');
let dlySpd = document.getElementById('delaySpd');

let s = new Sorting(arraySize.value);


arraySize.addEventListener("input", changeArraySize);
dlySpd.addEventListener("input", changeDelay)
window.onload = changeArraySize();
window.onload = changeDelay();



function changeArraySize() {
    s.updateArray(arraySize.value);
}

function changeDelay() {
    s.setDelay = dlySpd.value;
}

function genNewArray() {
    s.generateArray();
}

s.insertionSort();