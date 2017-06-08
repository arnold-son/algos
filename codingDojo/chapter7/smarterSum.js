//Use time-space tradeoff to accelerate average running time for iSigma(num)
//that returns sum of integers from 1 to num. Recall iSigma(1) = 1,
//iSigma(2) = 3, iSigma(3) = 6, iSigma(4) = 10.

function iSigma(num){
    if(iSigma.cache[num] !== undefined){
        return iSigma.cache[num];
    }
    var sum = iSigma.cache[iSigma.cache["max"]]
    for(var i = iSigma.cache["max"]+1; i <= num; i++){
        sum += i;
        iSigma.cache[i] = sum;
    }
    iSigma.cache["max"] = num;
    return sum
}
iSigma.cache = {"0":0,"max":0};

function iSigmaNocache(num){
    sum = 0;
    for(var i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
// console.log(iSigmaNocache(10000000))
console.time("iSigma 1st run")
iSigma(10000000)
console.timeEnd("iSigma 1st run")
console.time("iSigma 2nd run")
iSigma(10000000)
console.timeEnd("iSigma 2nd run")
console.time("iSigma 3rd run")
iSigma(10000000)
console.timeEnd("iSigma 3rd run")
console.time("iSigma 4th run")
iSigma(10000000)
console.timeEnd("iSigma 4th run")
console.time("iSigma 5th run")
iSigma(10000000)
console.timeEnd("iSigma 5th run")

// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
// console.log(iSigma(10000000))
