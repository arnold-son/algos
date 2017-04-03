//Implement removeNegatives() that accepts an array, removes negative values,
//and returns the same array (not a copy), preserving non-negatives' order.
//As always, do not use built-in array functions.
//Second: don't use nested loops.
function removeNegatives(arr){
    //without using nested loop
    var toKeep = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){toKeep.push(i)}
    }
    for(var i = 0; i < toKeep.length; i++){
        arr[i] = arr[toKeep[i]];
    }
    arr.length = toKeep.length;
    //using a nested loop:
    // for(var i = arr.length-1; i >= 0; i--){
    //     if(arr[i] < 0){
    //         var temp = i;
    //         while(arr[i+1] != undefined){arr[i] = arr[i+1];i++}
    //         i = temp;
    //         arr.pop();
    //     }
    // }
    return arr;
}

console.log(removeNegatives([1,2,4,-1,-25,-12,-12,123,-12,-34,232,-23,-312,-231,-24,213,2,3,35,7,8,9]))
