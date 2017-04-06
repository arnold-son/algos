//description: Build a standalone function to remove strings of even lengths
//from a given array.
var arr = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."]
//expected output: ["Nope!","Its","Chris","."]

function removeEvenLengthStrings(arr){
    for (var i = arr.length-1; i >= 0; i--){
        if (arr[i].length % 2 == 0){
            var temp = arr[i]
            arr[i] = arr[arr.length-1]
            arr[arr.length-1] = temp
            arr.pop()
        }
    }
    return arr
}

console.log(removeEvenLengthStrings(arr))
