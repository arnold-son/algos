//Efficiently combine two already-sorted arrays into a new sorted array containing
//the multiset union.
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].

function union(arr1,arr2){
    var union = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length || j < arr2.length){
        if(i >= arr1.length){
            union.push(arr2[j]);
            j++;
        } else if(j >= arr2.length){
            union.push(arr1[i]);
            i++;
        } else if(arr1[i] === arr2[j]){
            union.push(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            union.push(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i]){
            union.push(arr2[j]);
            j++;
        }
    }
    return union;
}

console.log(union([1,2,2,2,7],[2,2,6,6,7]))
