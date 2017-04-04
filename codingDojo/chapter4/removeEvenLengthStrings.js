//Build a standalone function to remove strings of even lengths from a given
//array. For array containing
//["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."],
//change that same array to ["Nope!","Its","Chris","."]

function removeEven(arr){
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i].length % 2 == 0){
            var temp = i;
            while(arr[i+1]){
                arr[i] = arr[i+1];
                i++;
            }
            i = temp;
            arr.pop();
        }
    }
    return arr;
}

console.log(removeEven(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));
