module.exports = function reverse (n) {
    const number = Math.abs(n);
    let result = '';

    for (let i = number.toString().length-1; i >= 0; i--) {
        result = `${result}${number.toString()[i]}`;
    }

    result = Number(result);
    return result;
}
