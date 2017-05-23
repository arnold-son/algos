function accum(str){
    var newString = "";
    for(var i = 0; i < str.length; i++){
        newString += str[i].toUpperCase();
        for(var j = 0; j < i; j++){
            newString += str[i].toLowerCase();
        }
        if(i !== str.length - 1){
            newString += "-"
        }
    }
    return newString;
}

//best solution taken from codewars.com:
// function accum(s) {
//   return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
// }
