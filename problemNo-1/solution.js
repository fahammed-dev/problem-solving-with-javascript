const str = 'the   sky    is blue';

function reverseStr(A) {
    let array = A.split(' ');
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    let string = newArray.toString();

    for (let i = 0; i < newArray.length; i++) {
        string = string.replace(',', ' ');
    }

    return string.replace(/  +/g,' '); // RegExp
}

console.log(reverseStr(str));
