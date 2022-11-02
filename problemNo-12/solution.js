const numbers = [44, 99, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function findMedian(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[(arr.length - 1) / 2];
}

console.log(findMedian(numbers));
