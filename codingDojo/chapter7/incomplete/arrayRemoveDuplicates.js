//Remove array duplicates. Do not alter original. Return new array with results
//'stable' (original order). For [1,2,1,3,4,2] return [1,2,3,4].

function arrayRemoveDuplicates(arr){
    var map = {};
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(map[arr[i]] === undefined){
            map[arr[i]] = true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(arrayRemoveDuplicates([1,2,1,3,4,2]))

//Second: work in-place in given array. Alter order if needed(stability is not
//required).

//add later

//Third: make it in-place and stable.

//add later

//Fourth: eliminate any second (inner) loop.

//add later
