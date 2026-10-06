const palindromes = function (text) {
    let lower = text.toLowerCase();
    let target = [".", ",", " ", "!"];
    let arr = lower.split("").filter(item => !target.includes(item))
    let reverse = arr.toReversed();
    return arr.every((value, index) => value === reverse[index]);
};
// Do not edit below this line
module.exports = palindromes;
