//Alan is good at breaking secret codes. One method is to eliminate values that
//lie within a specific known range. Given arr and values min and max, retain
//only the array values between min and max. Work in-place; return the array
//you are given, with values in original order. No built-in array functions.

function filterRange(arr,min,max){
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] > max || arr[i] < min){
            var temp = i;
            while(arr[i+1]){arr[i] = arr[i+1];i++}
            arr.pop();
            i = temp;
        }
    }
    return arr;
}
var test = [1,2,3,4,5,6,7,8,9,10];

// console.log(filterRange(test,1,5))
// console.log(filterRange(test,1,5))
// console.log(filterRange(test,0,0))
console.log(filterRange(test,1,11))
