//Remember Factorial(num)? It returned the product of positive integers from
// 1 to num. For these purposes, Factorial (0) = 1. Recreate this function, but
//use a time-space tradeoff to accelerate the average running time.

function fasterFactorial(num){
    if(fasterFactorial.cache[num] !== undefined){
        return fasterFactorial.cache[num];
    }
    var fac = fasterFactorial.cache[fasterFactorial.cache["max"]]
    for(var i = fasterFactorial.cache["max"]+1; i <= num; i++){
        fac*=i;
        fasterFactorial.cache[i] = fac;
    }
    fasterFactorial.cache["max"] = num;
    return fac;
}
fasterFactorial.cache = {"0":1,"1":1,"2":2,"3":6,"max":3}

function Factorial(num){
    if(num === 0){return 1}
    if(num < 3){return num}
    var fac = 2;
    for(var i = 3; i <= num; i++){
        fac *= i;
    }
    return fac;
}

console.time("Factorial first call")
    Factorial(700)
console.timeEnd("Factorial first call")
console.time("fasterFactorial first call")
    fasterFactorial(700)
console.timeEnd("fasterFactorial first call")
console.time("Factorial second call")
    Factorial(700)
console.timeEnd("Factorial second call")
console.time("fasterFactorial second call")
    fasterFactorial(700)
console.timeEnd("fasterFactorial second call")
console.time("Factorial third call")
    Factorial(700)
console.timeEnd("Factorial third call")
console.time("fasterFactorial third call")
    fasterFactorial(700)
console.timeEnd("fasterFactorial third call")
