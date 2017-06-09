//Modern computers can handle very large numbers, but they do have their limits.
//A number that is repeatedly multiplied by itself will eventually exceed a
//computer's ability to accurately represent it.
//
//Implement a function lastDigitAtoB(a,b) that accepts two non-negative integers.
//It should return the last digit of a number found by raising the first number
//(a) to an exponent of the second number (b).
//Examples:
//given (3,4), you should return 1. Given (12,5), return 2. How high can you
//scale your solution? For example, what is the return value for (237,124)?

function lastDigitAtoB(a,b){
    if(a === 0){
        return 0;
    }
    if(b === 0){
        return 1;
    }
    var num = 1;
    for(var i = 0; i < b; i++){
        num *= a;
        num %= 10;
    }
    return num;
}

console.log(lastDigitAtoB(3,4))
console.log(lastDigitAtoB(12,5))
console.log(lastDigitAtoB(237,124))
