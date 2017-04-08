//Write a function that accepts as a parameter a string containing someone's name.
//Return a string containing the following oh-so-cool greeting: strip off the
//first letter of the name, capitalize this new word, and add " to the [first letter]!"
//Given "Dylan", return "Ylan to the D!"

function dGetsJiggy(str){
    if(typeof(str) !== "string" || str.length < 2){
        return "invalid name"
    }
    return str[1].toUpperCase() + str.slice(2) + " to the " + str[0]
}

console.log(dGetsJiggy("Dylan"))
