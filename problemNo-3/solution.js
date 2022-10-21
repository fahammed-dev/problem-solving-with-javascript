// function for convert array to string
function arrayToString(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += arr[i];
        string += ' ';
    }
    return string;
}

// push function
function push(arr, item) {
    return [...arr, item];
}

function toBinary(x, cb1, cb2) {
    let arr = [];
    let i = 0;
    while (x > 0) {
        arr = [...arr, x % 2];
        x = Math.trunc(x / 2);
        i = i + 1;
    }

    let binary = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        binary = cb2(binary, arr[i]);
    }
    return cb1(binary);
}
console.log(toBinary(4, arrayToString, push));
