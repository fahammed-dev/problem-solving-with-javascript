const int = 100021;

function isPalindrome(num) {
    const input = num + '';
    let ans = '';
    for (let i = 0; i < input.length; i++) {
        if(input[i] === input[input.length-(i+1)]){
            ans = 'true';
        }if(input[i] !== input[input.length-(i+1)]) {
            ans = 'false';
            break;
        }
    }
    
    if(ans === 'true'){
        return true;
    }else if(ans === 'false'){
        return false;
    }
}

console.log(isPalindrome(int));