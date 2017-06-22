//Define a function that, given positive integer num, returns num/2 if num is
//even or 3*num +1 if num is odd. Continuously feeding result back into function
//in numerical series such as 5, 16, 8, 4, 2, 1. According to Dr. Lothar Collatz,
//the series always reaches 1 (and then repeats 4,2,1,4,2,1,...).
//What starting number requires the most iterations before reaching 1 the first
//time?

function collatz(num){
    console.log(num)
    if(num < 2){ return num }
    if(num % 2 === 0){
        return collatz(num/2)
    } else {
        return collatz(3*num+1)
    }
}

collatz(4)
