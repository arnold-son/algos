//Given a sequence of parentheses, braces and brackets, determine whether it is
//valid.
//Examples:
// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true.
// "D(i{a}l[ t]o)n{e" => false.
// "A(1)s[O(n]0{t) 0}k" => false.

function bracesValid(str){
    var open = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            open.push(str[i]);
        }
        else if(str[i] == ")" || str[i] == "}" || str[i] == "]"){
            switch(open[open.length-1]+str[i]){
                case ("()"): open.pop();break;
                case ("{}"): open.pop();break;
                case ("[]"): open.pop();break;
                default: return false;
            }
        }
    }
    return open.length == 0;
}

console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));
console.log(bracesValid("D(i{a}l[ t]o)n{e"));
console.log(bracesValid("A(1)s[O(n]0{t) 0}k"));
