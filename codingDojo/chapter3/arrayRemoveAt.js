//Given array and an index into array, remove and return the array value at that
//index. Do this without using built-in array methods except pop(). Think of
//popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr,index){
    if(index >= arr.length){
        console.log("Out of index.")
        return false;
    }
    var toBeRemoved = arr[index];
    for(var i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return toBeRemoved;
}

var test = [1,2,3,4,5,6,7,8,9,10];
console.log(removeAt(test,9),test);
