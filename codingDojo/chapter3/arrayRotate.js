//Implement rotateArr(arr,shiftBy) that accepts array and offset. Shift arr's
//values to the right by that amount. 'Wrap-around' any values that shift off
//array's end to the other side, so that no data is lost. Operate in-place:
//given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
function rotateArr(arr,shiftBy){
    shiftBy %= arr.length;
    if(shiftBy == 0){return arr}
    else if(shiftBy > 0){
        for(var i = arr.length; i > 0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = arr.pop();
        return rotateArr(arr,shiftBy-1);
    }
    else if(shiftBy < 0){
        arr.push(arr[0]);
        for(var i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr.pop();
        return rotateArr(arr,shiftBy+1);
    }
}
//
// console.log(rotateArr([1,2,3,4,5],1))
// console.log(rotateArr([1,2,3,4,5],2))
// console.log(rotateArr([1,2,3,4,5],3))
// console.log(rotateArr([1,2,3,4,5],4))
// console.log(rotateArr([1,2,3,4,5],5))
// console.log(rotateArr([1,2,3,4,5],-1))
// console.log(rotateArr([1,2,3,4,5],-2))
// console.log(rotateArr([1,2,3,4,5],-3))
// console.log(rotateArr([1,2,3,4,5],-4))
// console.log(rotateArr([1,2,3,4,5],-5))
console.log(rotateArr([1,2,3,4,5],10000000000))
