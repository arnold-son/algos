//Create a function that, given an input string str, returns a boolean whether
//parentheses in str are valid. Valid sets of parentheses always open before
//they close, for example. For "Y (r(p)p(3)r)s", return true. Given "N(0(p)3",
//return false, because the underlined ")" is premature: there is nothing to
//open for it to close.

function parensValid(str){
    //how many parentheses are left open:
    var open = 0;
    for(var i = 0; i < str.length; i++){
        //add 1 to open if new opening bracket found
        if(str[i] == "("){open++}
        //subtract 1 from open if closing bracket found
        else if(str[i] ==")"){open--}
        //if closing bracket is found with no open brackets, return false
        if(open < 0){return false}
    }
    //return whether all parentheses have been closed
    return open == 0
}

console.log(parensValid("Y (r(p)p(3)r)s"))
console.log(parensValid("N(0(p)3"))
console.log(parensValid("asdfasdf"))
console.log(parensValid("((((()))))"))
console.log(parensValid("((((("))
console.log(parensValid(")"))
