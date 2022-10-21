// function for making reverse word
function reverseWord(str) {
    let word = '';
    for (let i = str.length - 1; i >= 0; i--) {
        word = word + str[i];
    }
    return word;
}

// function for convert array to string
function arrayToString(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += arr[i];
        string += ' ';
    }
    return string;
}

function sentence(str, cb1, cb2) {
    let word = '';
    let sentence = [];

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            sentence.push(cb1(word));
            word = '';
        }
        if (str[i] !== ' ') {
            word += str[i];
        }
    }
    return cb2(sentence);
}

console.log(sentence('I love programming', reverseWord, arrayToString));
