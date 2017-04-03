//Return whether a given integer is prime. Prime numbers are only evenly
//divisible by themselves and 1. Many highly optimized solutions exist, but for
//now just create one that is easy to understand and debug.

function isPrime(int){
    var end = int;
    for(var i = 2; i < end; i++){
        if(int % i == 0){
            return false;
        }
        end = int/i;
    }
    return true;
}
