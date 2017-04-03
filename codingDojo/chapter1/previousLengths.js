//You are passed an array containing strings. Working within that same array,
//replace each string with a number - the length of the string at previous
//array index - and return the array.

function previousLengths(arr){
    for(var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

var test = ["asdf", "asdfasasdf", "asdlfkasdfkl", "asdlfkjasdlkfadsklasdk"];
console.log(previousLengths(test));
