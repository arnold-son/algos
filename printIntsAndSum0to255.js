//Print integers from 0 to 255, and with each integer print the sum so far.

function printIntsAndSum0to255(){
    var sum = 0;
    for(var i = 0; i <= 255; i++){
        sum += i;
        console.log(i, sum);
    }
}

printIntsAndSum0to255();
