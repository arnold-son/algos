//Combine two sorted arrays into a new sorted array containing the union set
//(i.e. removed duplicates).
//
//Example: given [1,2,2,2,7] and [2,6,6,7], return [1,2,6,7].

function unionDedupe(arr1,arr2){
    var union = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length || j < arr2.length){
        if(arr1[i] < arr2[j] || arr2[j] === undefined){
            if(union[union.length-1] !== arr1[i]){
                union.push(arr1[i]);
            }
            i++;
        } else if(arr2[j] < arr1[i] || arr1[i] === undefined){
            if(union[union.length-1] !== arr2[j]){
                union.push(arr2[j]);
            }
            j++;
        } else {
            if(union[union.length-1] !== arr1[i]){
                union.push(arr1[i]);
            }
            i++;
            j++;
        }
    }
    return union;
}

console.log(unionDedupe([1,2,2,2,7],[2,6,6,7]))
