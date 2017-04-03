//If you already know who Ada Lovelace is, that's great! In a History of Science,
//she is significant. Given number of any size, return the most significant digit.
//If you already know what strings are, that's great! However, don't use them here.
//Hint: use WHILE to bring the most significant digit into range where you can use
//the friendly modulus operator (%). The most significant digit is the leftmost
//non-zero digit of a number. Given 12345. return 1. Given 67.89, return 6. Given
//0.00987, return 9.

function mostSignificantDigit(num){
    num = Math.abs(num);
    if(num > 1){
        while(num >= 10){
            num /= 10;
        }
    }
    else{
        while(num < 1){
            num *= 10;
        }
    }
    return Math.trunc(num);
}

console.log(mostSignificantDigit(12345))
console.log(mostSignificantDigit(67.89))
console.log(mostSignificantDigit(0.00987))
