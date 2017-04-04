//Given a positive integer that is less than 4000, return a string containing
//that value in Roman numeral representation. In this representation, I is 1,
//V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV,
//349 is CCCIL and 444 is CDXLIV.
function integerToRomanNumerals(num){
    if(num>=4000){
        return false;
    }
    var thousands = Math.floor(num/1000);
    var hundreds = Math.floor(num/100)%10;
    var tens = Math.floor(num/10)%10;
    var ones = num%10;
    var romanNum = "";
    for(var i = 0; i < thousands; i++){
        romanNum+="M";
    }
    for(var i = 0; i < hundreds; i++){
        romanNum+="C";
    }
    for(var i = 0; i < tens; i++){
        romanNum+="X";
    }
    for(var i = 0; i < ones; i++){
        romanNum+="I";
    }
    if(hundreds == 4){
        romanNum = romanNum.split("CCCC").join("CD");
    }
    else if(hundreds < 9){
        romanNum = romanNum.split("CCCCC").join("D");
    }
    else if(hundreds == 9){
        romanNum = romanNum.split("CCCCCCCCC").join("CM");
    }
    if(num%100 == 49){
        romanNum = romanNum.split("XXXXIIIIIIIII").join("IL");
    }
    else if(num%100 >= 50 && num%100 < 90){
        romanNum = romanNum.split("XXXXX").join("L");
    }
    if(tens == 4){
        romanNum = romanNum.split("XXXX").join("XL");
    }
    else if(tens == 9){
        romanNum = romanNum.split("XXXXXXXXX").join("XC");
    }
    if(ones == 4){
        romanNum = romanNum.split("IIII").join("IV");
    }
    else if(ones < 9){
        romanNum = romanNum.split("IIIII").join("V");
    }
    else if(ones == 9){
        romanNum = romanNum.split("IIIIIIIII").join("IX");
    }
    return romanNum;
}
console.log(integerToRomanNumerals(1))
console.log(integerToRomanNumerals(4))
console.log(integerToRomanNumerals(5))
console.log(integerToRomanNumerals(9))
console.log(integerToRomanNumerals(10))
console.log(integerToRomanNumerals(11))
console.log(integerToRomanNumerals(49))
console.log(integerToRomanNumerals(50))
console.log(integerToRomanNumerals(51))
console.log(integerToRomanNumerals(88))
console.log(integerToRomanNumerals(89))
console.log(integerToRomanNumerals(90))
console.log(integerToRomanNumerals(100))
console.log(integerToRomanNumerals(1000))
console.log(integerToRomanNumerals(349))
console.log(integerToRomanNumerals(444))
console.log(integerToRomanNumerals(3449))
console.log(integerToRomanNumerals(3549))
console.log(integerToRomanNumerals(3649))
console.log(integerToRomanNumerals(3749))
console.log(integerToRomanNumerals(4749))
console.log(integerToRomanNumerals(2749))
console.log(integerToRomanNumerals(1749))
