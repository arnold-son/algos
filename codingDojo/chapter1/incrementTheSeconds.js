//Given an array of numbers arr, add 1 to every second element, specifically
//those whose index is odd (arr[1],[3],[5],etc). Afterward, console.log each
//array value and return arr.

function incrementTheSeconds(arr){
    for(var i = 1; i < arr.length; i += 2){
        console.log(arr[i]++);
    }
    return arr;
}

var test = [0,1,2,3,4,5,6,7];
console.log(incrementTheSeconds(test));
