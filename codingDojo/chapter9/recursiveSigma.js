//Write a recursive function that given a number returns sum of integers from 1
//to that number.

function rSigma(num){
    if(num < 1){ return 0 }
    return num + rSigma(num - 1)
}

console.log(rSigma(5))
