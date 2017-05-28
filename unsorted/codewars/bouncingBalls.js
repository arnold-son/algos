function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){return -1}
    var count = 1;
    while(h * bounce >= window){
        if(h * bounce === window){
            count++;
        } else{
            count+=2;
        }
        h*= bounce;
    }
    return count;
}
