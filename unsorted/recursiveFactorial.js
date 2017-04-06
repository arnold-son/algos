//description: Given num, return the product of ints from 1 up to num. If less
//than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1.
//Examples: rFact(3) = 6; rFact(6.5) = 720;

function factCalc(num){
    if (num == 1){
        return 1
    }
    return num * factCalc(num-1)
}

function rFact(num){
    if (num <= 0){
        return 1
    }
    return factCalc(Math.floor(num))
}

console.log(rFact(3)) //expected output: 6
console.log(rFact(6.5)) //expected output: 720 
