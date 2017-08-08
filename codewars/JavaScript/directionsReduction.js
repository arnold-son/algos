function dirReduc(arr){
    var previousLength = null;
    while(arr.length !== previousLength){
        var temp = [];
        previousLength = arr.length;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] + arr[i+1] === "NORTHSOUTH"){i++}
            else if(arr[i] + arr[i+1] === "SOUTHNORTH"){i++}
            else if(arr[i] + arr[i+1] === "EASTWEST"){i++}
            else if(arr[i] + arr[i+1] === "WESTEAST"){i++}
            else {temp.push(arr[i])}
        }
        arr = temp;
    }
    return arr;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

//#2 solution from codewars.com:
// function dirReduc(arr) {
//   var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//   while (pattern.test(str)) str = str.replace(pattern,'');
//   return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
// }
//references:
//  multiple var declarations on single line: https://stackoverflow.com/questions/694102/declaring-multiple-variables-in-javascript
//  RegExp.prototype.test(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
//  String.prototype.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//  String.prototype.match(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
//  javascript regex g modifier: https://www.w3schools.com/jsref/jsref_regexp_g.asp
