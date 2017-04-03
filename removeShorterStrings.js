//Given a string and value(length), remove any strings shorter than length from
//the array
var arr = ["a", "ab", "abc", "abcd", "abcde"]

function removeShorterStrings(arr, num){
    for (var i = arr.length-1; i >= 0; i--){
        if (arr[i].length < num){
            var temp = arr[i]
            arr[i] = arr[arr.length-1]
            arr[arr.length-1] = temp
            arr.pop()
        }
    }
    return arr
}

console.log(removeShorterStrings(arr, 1))
console.log(removeShorterStrings(arr, 2))
console.log(removeShorterStrings(arr, 3))
console.log(removeShorterStrings(arr, 4))
console.log(removeShorterStrings(arr, 5))
