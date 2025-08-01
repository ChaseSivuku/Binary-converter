var num1 = 0;
var num2 = 0;
var result = 0;

function add(value1, value2){
    return value1 + value2;
}

function sub(value1, value2){
    return value1 - value2;
}

function multi(value1, value2){
    return value1 * value2;
}

function toBinary(value){
    var result = [];
    var remainder;
    var quotient;
    do{
        remainder = value % 2;
        result.push(remainder);
        quotient = Math.floor(value/2);
        value = quotient;
    }
    while(quotient >= 1)
   
    return result.reverse().join("");
}

console.log(toBinary(12));

