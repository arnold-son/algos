//Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents).
//Accept a number of American cents, compute and print how to represent that
//amount with smallest number of coins. Common American coins are pennies (1 cent),
//nickels (5 cents), dimes (10 cents), and quarters (25 cents).

function generateCoinChange(cents){
    console.log(cents + " cents can be represented by:");
    var coins = [100,50,25,10,5,1];
    var change = [0,0,0,0,0,0];
    for(var i = 0; i < 7; i++){
        if(cents > coins[i]){
            change[i] = Math.floor(cents/coins[i]);
            cents %= coins[i];
        }
    }
    console.log("dollars: " + change[0]);
    console.log("half-dollars: " + change[1]);
    console.log("quarters: " + change[2]);
    console.log("dimes: " + change[3]);
    console.log("nickels: " + change[4]);
    console.log("pennies: " + change[5]);
}

generateCoinChange(94)
