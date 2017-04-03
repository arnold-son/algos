//Given a positive integer that is less than 4000, return a string containing
//that value in Roman numeral representation. In this representation, I is 1,
//V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000.
var int1 = 4
//expected output: "IV"
var int2 = 349
//expected output: "CCCIL"
var int3 = 444
//expected output: "CDXLIV"

function intToRomanNum(int){
    if (int > 0 && int < 4000){
        var dig1;
        var dig2;
        var dig3;
        var dig4;

        switch (string(int).length){
            case 1: dig4 = int; break;
            case 2: dig3 = string(int)[0]; dig4 = string(int)[1]; break;
            case 3: dig2 = string(int)[0]; dig3 = string(int)[1]; dig4 = string(int)[2]; break;
            case 4: dig1 = string(int)[0]; dig2 = string(int)[1]; dig3 = string(int)[2]; dig4 = string(int)[3]; break
        }
        
    }
    else{
        return "number must be between 0 and 4000"
    }
}
