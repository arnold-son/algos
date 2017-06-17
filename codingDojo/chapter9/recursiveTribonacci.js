function rTrib(num){
    if(num <= 1){ return 0 }
    if(num === 2){ return 1 }
    return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3)
}

console.log(rTrib(6))
