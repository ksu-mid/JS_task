function findItem(n) {
    let i = Math.pow(5, 0.5);
    let num1 = (1 + i) / 2;
    let num2 = (1 - i) / 2;
    let result = Math.round((Math.pow(num1, n) - Math.pow(num2, n)) / i);
    return result;
}
alert(findItem(12));