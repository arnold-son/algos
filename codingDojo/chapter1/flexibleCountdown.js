//Based on earlier "Countdown By Fours", given lowNum, highNum, mult, print
//multiples of mult from highNum down to lowNum, using a FOR.
//For (2,9,3), print 9 6 3 (on successive lines).

function flexibleCountdown(lowNum, highNum, mult){
    highNum -= highNum % mult
    for(var i = highNum; i >= lowNum; i-=mult){
        console.log(i);
    }
}

flexibleCountdown(2,9,3)
