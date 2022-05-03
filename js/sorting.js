class Sorting {
    #size;
    #delay;
    #bars;

    constructor(size, delay) {
        this.#size = size;
        this.#delay = delay;
        this.#bars = document.querySelector("#array");
    }

    generateArray() {
        this.#bars.innerHTML = ""; 
        // console.log("Inside generateArray(). Size: " + this.#size);
        for (let i = 0; i < this.#size; i++) {
            let val = Math.ceil(Math.random() * this.#size);
            let e = document.createElement("div");
            e.style.height = `${val * 3}px`;
            e.classList.add('bar');
            e.classList.add('item');
            this.#bars.appendChild(e);
        }
    }

    updateArray(size) {
        this.#size = size;
        // console.log("Inside updateArray(). Size: " + this.#size);
        this.generateArray();
    }

    set setDelay(delay) {
        this.#delay = delay;
    }

    // Insertion Sort
    insertionSort() {
        this.#insertionSort(this.#bars, 0, this.#size);
    }

    async #insertionSort(array, start, end) {
        let siftVal;
        let emptyIndex;
        let b = document.querySelectorAll(".bar");

        for (let i = start + 1; i < end; i++) {
            siftVal = parseInt(b[i].style.height);
            emptyIndex = i;

            while (emptyIndex > start && parseInt(b[emptyIndex - 1].style.height) > siftVal) {
                await this.#swapDriver(b, emptyIndex, emptyIndex - 1);
                emptyIndex--;
            }

            array[emptyIndex] = siftVal;
        }
    }

    // Selection Sort
    async selectionSort() {
        let a = document.querySelectorAll(".bar");
        for (let i = 0; i < this.#size; i++) {
            let min = this.#finMinForSS(a, i, this.#size);
            await this.#swapDriver(a, i, min);
        }
    }

    #finMinForSS(a, start, end) {
        let index = start;
        for (let i = start + 1; i < end; i++) {
            let val1 = parseInt(a[i].style.height);
            let val2 = parseInt(a[index].style.height);
            if (val1 < val2) {
                index = i;
            }
        }
        return index;
    }

    // Bubble sort
    async bubbleSort() {
        let a = document.querySelectorAll(".bar");
        for (let i = 0; i < this.#size; i++) {
            for (let j = 0; j < this.#size - i - 1; j++) {
                let val1 = parseInt(a[j].style.height);
                let val2 = parseInt(a[j + 1].style.height);
                if (val1 > val2) {
                    await this.#swapDriver(a, j, j + 1);
                }
            }
        }
    }

    mergeSort() {
        let a = document.querySelectorAll(".bar");
        let b = new Array(a.length);
        console.log(a.length);
        this.#mergeSortR(a, 0, a.length, b);
    }

    async #mergeSortR(a, start, end, temp) {
        if (end - start == 2) {
            if (parseInt(a[start].style.height) > parseInt(a[start + 1].style.height)) {
                await this.#swapDriver(a, start, start + 1);
            }
        }
        else if (end - start > 2) {
            let mid = Math.floor(start + (end - start) / 2);
            await this.#mergeSortR(a, start, mid, temp);
            await this.#mergeSortR(a, mid, end, temp);
            this.#merge(a, start, mid, end, temp);
        }
    }

    #merge(a, start, mid, end, temp) {
        let currL = start;
        let currR = mid;

        for (let currT = start; currT < end; currT++) {
            if (currL < mid && (currR >= end || parseInt(a[currL].style.height) < parseInt(a[currR].style.height))) {
                temp[currT] = parseInt(a[currL].style.height);
                currL++;
            }
            else {
                temp[currT] = parseInt(a[currR].style.height);
                currR++;
            }
        }

        for (let i = start; i < end; i++) {
            a[i].style.height = `${temp[i]}px`;
        }
    }


    quickSort() {
        let a = document.querySelectorAll(".bar");
        this.#quickSortR(a, 0, a.length);
    }

    async #quickSortR(a, start, end) {
        let pivotPos;
        if (end - start == 2) {
            if (parseInt(a[start].style.height) > parseInt(a[start + 1].style.height)) {
                await this.#swapDriver(a, start, start + 1);
            }
        }
        else if (end - start > 2) {
            await this.#choosePivot(a, start, end);
            pivotPos = await this.#partition(a, start, end);
            await this.#quickSortR(a, start, pivotPos);
            await this.#quickSortR(a, pivotPos + 1, end);
        }
    }

    async #choosePivot(a, start, end) {
        let mid = start + Math.floor((end - start) / 2);

        let startVal = parseInt(a[start].style.height);
        let midVal = parseInt(a[mid].style.height);
        let endVal = parseInt(a[end - 1].style.height);

        this.#setColor(a[mid], 'yellow');
        if (mid <= start) {
            if (endVal <= midVal) {
                await this.#swapDriver(a, start, mid);
            }
            else if (endVal <= startVal) {
                await this.#swapDriver(a, start, end - 1);
            }
        }
        else {
            if (midVal <= endVal) {
                await this.#swapDriver(a, start, mid);
            }
            else if (startVal <= endVal) {
                await this.#swapDriver(a, start, end - 1);
            }
        }
    }

    async #partition(a, start, end) {
        let bigStart = start + 1;
        let pivot = parseInt(a[start].style.height);

        for (let i = start + 1; i < end; i++) {
            let curr = parseInt(a[i].style.height);
            if (curr < pivot) {
                await this.#swapDriver(a, bigStart, i);
                bigStart++;
            }
        }
        await this.#swapDriver(a, start, bigStart - 1);
        return bigStart - 1;
    }


    async shellSort() {
        let a = document.querySelectorAll(".bar");
        console.log(a.length);
        let h = 1;
        console.log(h);
        while (h <= a.length) {
            h = h * 3 + 1; // Knuth's sequence
            console.log(h);
        }

        while (h > 0) {
            for (let outer = h; outer < a.length; outer++) {
                let temp = parseInt(a[outer].style.height);
                let inner = outer;
                let inVal = parseInt(a[inner - h].style.height);
                while (inner > h - 1 && inVal >= temp) {
                    // await this.#myDelay(250);
                    a[inner].style.height = a[inner - h].style.height;
                    inner -= h;
                }
                a[inner].style.height = a[outer].style.height;
            }
            h = Math.floor((h - 1) / 3);
            // h = Math.floor((h - 1) / 3);
        }
    }
    // Helpers

    async #swapDriver(a, i, j) {
        this.#setColor(a[i], 'red');
        this.#setColor(a[j], 'red');

        await this.#myDelay(this.#delay);
        this.#swap(a[i], a[j]);

        this.#setColor(a[i], 'blue');
        this.#setColor(a[j], 'blue')

    }

    #swap(e1, e2) {
        let temp = e1.style.height;
        e1.style.height = e2.style.height;
        e2.style.height = temp;
    }

    #setColor(b, color) {
        b.style.background = color;
    }

    #myDelay(mS) {
        console.log("In myDelay. Delay speed: " + mS);
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, mS)
        });
    }
}
