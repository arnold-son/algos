//Build a function that accepts an array. Return a new array with all values
//except first, adding 7 to each. Do not alter the original array.

function addSevenToMost(arr){
    newArr = [];
    for(var i = 1; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}

var test = [1,2,3,4,5,6,7,8,9,10];

console.log(addSevenToMost(test));
