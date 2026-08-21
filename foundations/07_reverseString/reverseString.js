const reverseString = function(str) {
    let arr = str.split("")
    return arr.reverse().join("")
};
console.log(reverseString("hello world"))

// Do not edit below this line
module.exports = reverseString;
