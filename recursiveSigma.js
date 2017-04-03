//description: Write a recursive function that given a number returns sum of
//integers from 1 to that number.
//Example: rSigma(5) = 15;
//rSigma(2.5) = 3;
//rSigma(-1) = 0;

function sigmaCalc(num){
    if (num == 1){
        return 1
    }
    return num + sigmaCalc(num-1)
}

function rSigma(num){
    if (num > 0){
        return sigmaCalc(Math.floor(num));
    }
    return 0
}

console.log(rSigma(5)) //expected output: 15
console.log(rSigma(2.5)) //expected output: 3
console.log(rSigma(-1)) //expected output: 0
