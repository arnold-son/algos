//Use time-space tradeoff to accelerate running time of iFib(num) that returns
//numth number in the Fibonacci sequence. Recall iFib(0) = 0, iFib(1) = 1,
//iFib(2) = 1, iFib(3) = 2.

function fancyFibonacci(n){
    if(fancyFibonacci.cache[n] !== undefined){
        return fancyFibonacci.cache[n];
    }
    fancyFibonacci.cache[fancyFibonacci.cache["max"]+1] = fancyFibonacci.cache[fancyFibonacci.cache["max"]] + fancyFibonacci.cache[fancyFibonacci.cache["max"]-1];
    fancyFibonacci.cache["max"]++;
    console.log(fancyFibonacci.cache)
    return fancyFibonacci(n)
}
fancyFibonacci.cache = {"0":0,"1":1,"2":1,"3":2,"max":3}

console.log(fancyFibonacci(10))
