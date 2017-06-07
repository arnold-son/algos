//Flatten a given array, eliminating nested & empty arrays. Do not alter it;
//return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4].

function arrayFlatten(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var j = 0; j < arr[i].length; j++){
                newArr.push(arr[i][j])
            }
        } else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(arrayFlatten([1,[2,3],4,[]]))

//Second: work in-place in the given array (do not create another). Alter order
//if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2]
