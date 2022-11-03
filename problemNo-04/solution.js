const nums = [1,1,0,1,1,1];

function maxConsecutive(arr) {
    let countArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && i === arr.length - 1) {
            count++;
            countArr.push(count);
        }else if (arr[i] === 1) {
            count++;
        }else if (arr[i] === 0) {
            countArr.push(count);
            count = 0;
        }
    }
    
    let maxCon = 0;
    for(let i = 0; i < countArr.length; i++) {
        if(countArr[i] > maxCon) {
            maxCon = countArr[i];
        }
    }
    return maxCon;
}

maxConsecutive(nums);
