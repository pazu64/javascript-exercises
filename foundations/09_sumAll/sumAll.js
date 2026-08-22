const sumAll = function(int1, int2) {
    let arr = [];
    if((Number.isInteger(int1) === false || Number.isInteger(int2) === false) || (int1 < 0 || int2 < 0)) {
        return "ERROR";
    }else if (int1 > int2) {
        for (let i = int1; i > int2 - 1; i--) {
            arr.push(i)
        }
    }else{
        for (let i = int1; i < int2 + 1; i ++) {
            arr.push(i);
        }
    }
    return arr.reduce((sum, current) => sum + current, 0)
};

// Do not edit below this line
module.exports = sumAll;
