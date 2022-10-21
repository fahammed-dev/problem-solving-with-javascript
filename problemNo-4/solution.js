function power(x,n) {
    let result = 1;
    for(let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}

console.log(power(7,2));