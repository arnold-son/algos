//Replicate JavaScript's concat(). Create a standalone function that accepts two
//arrays. Return a new array containing the first array's elements, followed by
//the second array's elements. Do not alter the original arrays.
//Ex.:arrConcat(['a','b'],[1,2]) should return new array ['a','b',1,2].

function arrConcat(arr1,arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length + arr2.length; i++){
        if(i < arr1.length){
            newArr.push(arr1[i]);
        }
        else{
            newArr.push(arr2[i-arr1.length]);
        }
    }
    return newArr;
}

console.log(arrConcat(['a','b'],[1,2]))
console.log(arrConcat([1,2,3,4],[5,6,7,8,9,10,11]))
console.log(arrConcat([1,2,3,4],[]))
console.log(arrConcat([],[]))
