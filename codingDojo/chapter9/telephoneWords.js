//Nikki has a new phone number (304-5083) and wants to create a clever way for
//everyone to remember it. On older telephones, the keypad associates letters
//with each numeral. Given a seven-digit telephone number, return an array of
//all possible strings that equate to that phone number. For reference, here is
//the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] - for
//completeness, map 1 to I and zero to O. For example, given a phone number
//818-2612, return an array of 243 different strings, including "vitamic" and
//"titania".

function telephoneWords(phoneNumber){
    phoneNumber = phoneNumber.toString();
    function stringBuilder(stringNumber,arr,index){
        var newArr = [];
        var re = /[0123456789]/
        var map = {"0":"O","1":"i","2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno",
        "7":"pqrs","8":"tuv","9":"wxyz"}
        if(index === undefined){
            index = 0;
        }
        if(re.exec(stringNumber[index]) !== null){
            if(arr === undefined){
                newArr = map[stringNumber[index]].split("")
            } else {
                for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < map[stringNumber[index]].length; j++){
                        newArr.push(arr[i]+map[stringNumber[index]][j])
                    }
                }
            }
        } else {
            newArr = arr;
        }
        if(index + 1 < stringNumber.length){
            console.log("recursing",newArr.length,index)
            return stringBuilder(stringNumber,newArr,index+1)
        } else {
            return newArr;
        }
    }
    return stringBuilder(phoneNumber)
}

console.log(telephoneWords("818-2612").length)
