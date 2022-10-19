const n = 5;
const list = [1, 6, 8, 0, 999];

function findMin(n, arr) {
    let min = arr[0];
    for (let i = 1; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin(n,list));
