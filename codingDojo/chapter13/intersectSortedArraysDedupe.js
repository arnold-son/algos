//Efficiently combine two sorted multiset arrays into an array containing the
//sorted set intersection of the two.
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,7].

function intersectDedupe(arr1,arr2){
    var intersect = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            if(intersect[intersect.length-1] !== arr1[i]){
                intersect.push(arr1[i]);
            }
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            i++;
        } else {
            j++;
        }
    }
    return intersect;
}

console.log(intersectDedupe([1,2,2,2,7],[2,2,6,6,7]))
