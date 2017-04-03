//Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let's say
//you are given an array with heights of consecutive buildings, starting closest
//to you and extending away. Array [-1,7,3] would represent three buildings:
//first is actually out of view below street level, behind it is second at 7
//stories high, third is 3 stories high (hidden behind the 7-story). You are
// situated at street level. Return array containing heights of buildings you
//can see, in order: Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4].
//As always with challenges, do not use built-in array functions such as
//unshift().

function skylineHeights(arr){
    var newArr = [];
    var i = 0;
    while(arr[i] != undefined){
        if(arr[i] > 0 && (!newArr[newArr.length-1] || arr[i] > newArr[newArr.length-1])){
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr;
}
console.log(skylineHeights([-1,1,1,7,3]))
console.log(skylineHeights([0,4]))
console.log(skylineHeights([1,2,3,4,3,2,1,12,5,21,0,1231,123]))
