//Efficiently combine two sorted arrays into an array containing the sorted
//multiset intersection of the two.
//
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7]

function intersectSortedArrays(arr1,arr2){
    var newArr = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            newArr.push(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            i++;
        } else {
            j++;
        }
    }
    return newArr;
}

console.log(intersectSortedArrays([1,2,2,2,7],[2,2,6,6,7]))
