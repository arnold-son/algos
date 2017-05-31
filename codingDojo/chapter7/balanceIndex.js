//Here, a balance point is on an index, not between indices. Return the balance
//index where sums are equal on either side (exclude its own value). Return -1
//if none exist. Ex.: [-2,5,7,0,3] => 2, but [9,9] -> -1.

function balanceIndex(arr){
    if(arr.length < 3){ return -1 }
    var sum = 0;
    var leftSum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    for (var i = 1; i < arr.length; i++) {
        sum -= arr[i];
        if(leftSum === sum){ return i }
        leftSum += arr[i];
    }
    return -1;
}

console.log(balanceIndex([9,9]))
console.log(balanceIndex([-2,5,7,0,3]))
