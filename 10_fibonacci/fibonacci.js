const fibonacci = function(n) {
    if(n < 0){
        return "OOPS";
    }
    if(n == 0){
        return 0;
    }
    if(n <= 2){
        return 1;
    }
    let a = 1;
    let b = 1;
    for(i = 3; i <= n; i++){
        temp = a;
        a = b;
        b = b + temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
