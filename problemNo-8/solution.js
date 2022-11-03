const arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
    arr.sort()
    let minSum = 0;
    let maxSum = 0;
    for (let i=1; i< arr.length; i++){
        maxSum += arr[i]
    }
    for (let i=0; i< arr.length -1; i++){
        minSum += arr[i]
    }
    return `${minSum} ${maxSum}`  
}

console.log(miniMaxSum(arr));
