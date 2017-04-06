function fibCalc(num){
    if(num <= 2){
        return 0
    }
    if(num == 3){
        return 1
    }
    return fibCalc(num-1) + fibCalc(num-2) + fibCalc(num-3)
}

function rTrib(num){
    return fibCalc(Math.floor(num))
}

console.log(rTrib(2))
