//Efficiently merge two already-sorted arrays into a new sorted array containing
//the multiset of all values.
//
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return new array [1,2,2,2,2,2,6,6,7,7].

function mergeSortedArrays(arr1,arr2){
    var merged = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(i >= arr1.length){
            merged.push(arr2[j]);
            j++;
        } else if(j >= arr2.length){
            merged.push(arr1[i]);
            i++
        } else if(arr1[i] === arr2[j]){
            merged.push(arr1[i]);
            merged.push(arr2[j]);
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i]){
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged;
}

console.log(mergeSortedArrays([1,2,2,2,7],[2,2,6,6,7]))
