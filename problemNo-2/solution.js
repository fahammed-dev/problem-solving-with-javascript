const strList = ['I', 'love', 'my country', 'very', 'much'];

function findLongestStr(arr) {
    let longStr = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(longStr.length < arr[i].length){
            longStr = arr[i];
        }
    }
    return longStr;
}

console.log(findLongestStr(strList));