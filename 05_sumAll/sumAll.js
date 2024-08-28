const sumAll = function(num1, num2) {
    // check for negatives
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    // check for integers
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    // add upp all numbers between and including given positive integers
    let sum = 0;
    for(i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
