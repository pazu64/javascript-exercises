const fibonacci = function(int) {
    if (int === 0 || int === 1) {
        return 0
    }
    if (int < 0) {
        return "OOPS"
    }
    let arr = [0, 1, 1,];
    for (let i = 2; i < int; i++) {
        arr.push((arr[arr.length - 1]) + (arr[arr.length - 2]));
    }
    return arr[int];
};
//console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
