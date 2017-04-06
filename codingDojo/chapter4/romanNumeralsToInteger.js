//Sept. 16, 2014 headline: "Ancient Computer Found in Roman Shipwreck".
//Comprising 30 bronze gears, its wooden frame features 2000 characters. Given
//a string containing a Roman numeral representation of a positive integer,
//return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.

function romanNumeralsToInteger(rNum){
    var integer = 0;
    for(var i = 0; i < rNum.length; i++){
        switch(rNum[i]){
            case "M": integer+=1000; if(rNum[i-1] == "C"){integer-=100}break;
            case "D": integer+=500; if(rNum[i-1] == "C"){integer-=100}else if(rNum[i-1] == "X"){integer-=10}break;
            case "C": if(rNum[i+1] != "M" && rNum[i+1] != "D"){integer+=100}break;
            case "L": integer+=50; if(rNum[i-1] == "X"){integer-=10}else if(rNum[i-1] == "I"){integer-=1}break;
            case "X": if(rNum[i+1] != "C" && rNum[i+1] != "L" && rNum[i+1] != "D"){integer+=10}if(rNum[i-1] == "I"){integer-=1}break;
            case "I": if(rNum[i+1] != "X" && rNum[i+1] != "L"){integer+=1}break;
        }
    }
    return integer;
}

console.log(romanNumeralsToInteger("III"))
console.log(romanNumeralsToInteger("DCIX"))
console.log(romanNumeralsToInteger("MXDII"))
