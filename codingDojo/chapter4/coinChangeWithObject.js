//As before, given a number of U.S. cents, return the optimal configuration of
//coins, in an object.

function coinChange(cents){
    change = {};
    if(cents/100 >= 1){change["dollars"] = Math.floor(cents/100);cents%=100}
    if(cents/50 >= 1){change["half-dollars"] = Math.floor(cents/50);cents%=50}
    if(cents/25 >= 1){change["quarters"] = Math.floor(cents/25);cents%=25}
    if(cents/10 >= 1){change["dimes"] = Math.floor(cents/10);cents%=10}
    if(cents/5 >= 1){change["nickels"] = Math.floor(cents/5);cents%=5}
    if(cents >= 1){change["pennies"] = cents}
    return change;
}

console.log(coinChange(12093123))
console.log(coinChange(12023))
console.log(coinChange(23))
console.log(coinChange(1203))
