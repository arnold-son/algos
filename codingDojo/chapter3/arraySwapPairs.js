//Swap positions of successive pairs of values of given array. If length is odd,
//do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example,
//change input ["Brendan",true,42] to [true,"Brendan",42]. As with all challenges
//do this without using any built-in array methods.

function swapPairs(arr){
    var end = arr.length;
    if(arr.length % 2 > 0){
        end = arr.length-1;
    }
    for(var i = 0; i < end; i+=2){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));
