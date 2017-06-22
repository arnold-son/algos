//Martin loves grapes. He sees a number of baggies containing grapes, all in a
//row. Stephen tells him that he can take as many of the baggies as he wants, as
//he wants, as long as he doesn't take two that are next to each other. Martin
//wants to maximize his number of grapes. Grapes are pretty healthy, so let's
//help him out. Create a function to accept an array of non-negative integers
//representing number of grapes in each adjacent baggy. Your function should
//return the maximum amount of grapes he can obtain.

console.log(gotAnyGrapes([1,2,3,9,5]))

function gotAnyGrapes(arr){
    function maxGrapesFromZeroToIndex(arr,i){
        if(i === 0){
            return arr[0];
        }
        if(i === 1){
            return arr[1] > arr[0] ? arr[1] : arr[0];
        }
        return (arr[i] + maxGrapesFromZeroToIndex(arr,i-2)) > maxGrapesFromZeroToIndex(arr,i-1) ? arr[i] + maxGrapesFromZeroToIndex(arr,i-2) : maxGrapesFromZeroToIndex(arr,i-1);
    }
    return maxGrapesFromZeroToIndex(arr,arr.length-1)
}
