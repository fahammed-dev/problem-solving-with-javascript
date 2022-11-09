const numbers = [2, 7, 11, 15];
const target = 9;

function twoSum(input, target) {
    const length = input.length;
    for(let i = 0; i < length; i++) {
        for(let j = i+1; j < length; j++) {
            if(input[i] + input[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(numbers, target));