//Return the second-to-last element of an array.
function arraySecondToLast(arr){
    if(arr[arr.length-2] != undefined){return arr[arr.length-2]}
    return false;
}

console.log(arraySecondToLast([1,2,3]));
console.log(arraySecondToLast([1]));
