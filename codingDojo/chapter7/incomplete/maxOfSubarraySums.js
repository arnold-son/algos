//How efficient can you be on this following final challenge? The input may hold
//many million values.
//
//Given a numerical array that is potentially very long, return the maximum sum
//of values from a subarray. Any consecutive sequence of indices in the array
//is considered a subarray. Create a function that returns the highest sum
//possible from these subarrays. Given [1,2,-4,3,-2,3,-1], you should return 4
//(for subarray [3,-2,3]), and given [-1,-2,-4,-3,-2,-3], return 0 (for []).
//This problem has many possible implentations. Which do you prefer & why?

//note: brute force solution

function maxOfSubarraySums(arr){
    var max = arr.reduce(function(acc,val){return acc + val})
    for(var i = arr.length-1; i > 0; i--){
        var start = 0;
        for(var end = i; end <= arr.length; end++){
            var sum = arr.slice(start,end).reduce(function(acc,val){return acc + val});
            if(max < sum){
                max = sum;
            }
            start++;
        }
    }
    return max > 0 ? max : 0;
}

console.log(maxOfSubarraySums([1,2,-4,3,-2,3,-1]))
console.log(maxOfSubarraySums([-1,-2,-4,-3,-2,-3]))
