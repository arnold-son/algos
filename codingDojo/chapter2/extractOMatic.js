//Create the extractDigit(num,digitNum) function that given a number and a digit
//number, returns the numeral value of that digit. 0 represents the ones digit,
//1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,7), return 0.
//
//Second: handle negative digitNum values, where -1 represents tenths digit (0.x),
//-2 represents hundredths digit(0.0x), etc. Given (123.45,-1), return 4.
//
//Third: handle negative num values as well, doing what you think is appropriate.

// function extractDigit(num,digitNum){
//     num = Math.abs(num);
//     if(digitNum >= 0){
//         num = Math.trunc(num);
//         return String(num)[String(num).length-1-digitNum];
//     }
//     else if(digitNum < 0){
//         num = num % 1;
//         return String(num)[1+Math.abs(digitNum)];
//     }
//
// }

console.log(extractDigit(1824,2));
console.log(extractDigit(-1824,2));
console.log(extractDigit(123.45,-1))
console.log(extractDigit(-123.45,-1))

function extractDigit(num,digitNum){
    return Math.trunc(num/Math.pow(10,digitNum)%10);
}
