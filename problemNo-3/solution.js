const num = [2, 14, 18, 22, 22];

function isDuplicate(arr) {
    if (arr.length === 1) {
        return false;
    }
    
    let ans = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                ans = 'true';
                break; // child loop will break, but mother loop will be start. So, we also have to stop that in line 14.
            } else {
                ans = 'false';
            }
        }
        if (ans === 'true') {
            break;
        }
    }
    return ans;
}

console.log(isDuplicate(num));
