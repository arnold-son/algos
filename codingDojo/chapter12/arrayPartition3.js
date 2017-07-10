//Previous partition() implementations do not group duplicates of the pivot
//together. Create partition3() to keep pivot elements together; return an array
//containing indices for first pivot and first greater. Change [5,1,8,4,9,2,5,3]
//to [1,4,2,3,5,5,8,9] and return [4,6].
//Note: other 5 moved next to pivot.

function arrayPartition3(arr,pivot){
    if(pivot === undefined){pivot = 0}
    var j = 0;
    var dups = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < arr[pivot]){
            if(j === pivot){ pivot = i }
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        if(i !== pivot && arr[i] === arr[pivot]){
            dups.push(i);
        }
    }
    if(pivot !== j){
        var temp = arr[j];
        arr[j] = arr[pivot];
        arr[pivot] = temp;
        pivot = j;
    }
    while(dups.length > 0){
        var temp = arr[pivot + 1];
        arr[pivot + 1] = arr[dups[dups.length-1]];
        arr[dups[dups.length-1]] = temp;
        pivot++;
        dups.pop();
    }
    return [j,pivot+1]
}
var test = [5,1,8,4,9,2,5,3];
console.log(arrayPartition3(test),test)
