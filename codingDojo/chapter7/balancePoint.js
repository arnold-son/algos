//Write a function that returns whether the given array has a balance point
//between indices, where one side's sum is equal to the other's.
//Example: [1,2,3,4,10] => true (between indices 3 & 4), but [1,2,4,2,1] => false.

function balancePoint(arr){
    if(arr.length < 2){ return false; }
    var sum = 0;
    var leftSum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    for(var i = 0; i < arr.length; i++){
        sum -= arr[i];
        leftSum += arr[i];
        if(sum === leftSum){ return true }
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10]))
console.log(balancePoint([1,2,4,2,1]))
