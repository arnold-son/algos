//You are given a string containing chars '0', '1', and '?'. For every '?',
//either '0' or '1' can be substituted. Write a recursive function to return
//array of all valid strings with '?' chars expanded to '0' or '1'.
//binStrExpand("1?0?") => ["1000","1001","1100","1101"]. If you use string
//functions such as slice() use them sparingly, as they are expensive.

function binStrExpand(str){
    for(var i = 0; i < str.length; i++){
        if(str[i] == '?'){
            str = binStrExpand(str.slice(0,i)+0+str.slice(i+1)) + " " + binStrExpand(str.slice(0,i)+1+str.slice(i+1));
        }
    }
    return str;
}

console.log(binStrExpand("1?0?").split(" "))
