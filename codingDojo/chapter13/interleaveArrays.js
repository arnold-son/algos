//Given two unsorted arrays, create a new array containing the elements of both,
//resulting in an unsorted merge of all values. When populating the new array
//alternate (interleave) values between the two arrays until one is exhausted,
//then include all of the other.
//
//Example: given [77,22,11,22] and [2,6,7,2,6,2], return [77,2,22,6,11,7,22,2,6,2].

function interleaveArrays(arr1,arr2){
    var newArr = [];
    var length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (var i = 0; i < length; i++) {
        if(i < arr1.length){
            newArr.push(arr1[i])
        }
        if(i < arr2.length){
            newArr.push(arr2[i])
        }
    }
    return newArr;
}

console.log(interleaveArrays([77,22,11,22],[2,6,7,2,6,2]))
