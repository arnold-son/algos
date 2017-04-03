//Given array, swap first and last, third and third-to-last, etc.

function swapTowardTheCenter(arr){
    for(var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

var test = [true, 42, "Ada", 2, "pizza"];
var test2 = [1,2,3,4,5,6];

console.log(swapTowardTheCenter(test))
console.log(swapTowardTheCenter(test2))
