//Create a function to retrieve a Tribonacci number, which we will define as
//the sum of the previous 3 values. Tribonaccis start with {0,0,1,1,2,4,7,13}
//Again, use a time-space tradeoff to make it fast.

function trickyTribonacci(n){
    if(trickyTribonacci.cache[n] !== undefined){
        return trickyTribonacci.cache[n];
    }
    trickyTribonacci.cache[trickyTribonacci.cache["max"]+1] = trickyTribonacci.cache[trickyTribonacci.cache["max"]]+trickyTribonacci.cache[trickyTribonacci.cache["max"]-1]+trickyTribonacci.cache[trickyTribonacci.cache["max"]-2]
    trickyTribonacci.cache["max"]++;
    return trickyTribonacci(n);
}
trickyTribonacci.cache = {"0":0,"1":0,"2":1,"3":1,"4":2,"5":4,"6":7,"7":13,"max":7}

trickyTribonacci(100)
console.log(trickyTribonacci.cache)
