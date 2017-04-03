//Ever since youa rrived at the Dojo. you wanted one of those cool Coding Dojo
//sweatshirts - maybe even more than one. Let's say they cost $20 (including tax),
//but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you
//buy three, or a sweet 35% discount if you buy four or more. He only accepts
//cash and says he doesn't have coins, so you should round up to the nearest
//dollar. Build function sweatshirtPricing(num) that, given a number of
//sweatshirts, returns the cost.

function sweatshirtPricing(num){
    var cost = 20;
    if(num == 2){
        cost = Math.ceil(cost*0.91);
    }
    else if(num == 3){
        cost = Math.ceil(cost*0.81);
    }
    else if(num > 3){
        cost = Math.ceil(cost*0.65);
    }
    return cost * num;
}

for(var i = 1; i < 21; i++){
    console.log(sweatshirtPricing(i))
}
