//From the above, derive the following that accept and draw the given characters,
//not just asterisks:
function drawLeftChars(num, char){
    char = char[0];
    if(num > 75){num = 75}
    var chars = "";
    for(var i = 0; i < num; i++){
        chars += char;
    }
    console.log(chars)
}
function drawRightChars(num, char){
    char = char[0];
    if(num > 75){num = 75}
    var chars = "";
    var spaces = "";
    for(var i = 0; i < num; i++){
        chars += char;
    }
    for(var i = 0; i < 75 - num; i++){
        spaces += " ";
    }
    console.log(spaces + chars)
}
function drawCenteredChars(num, char){
    char = char[0];
    if(num > 75){num = 75}
    var chars = "";
    var leftSpace = "";
    var rightSpace = "";
    for(var i = 0; i < num; i++){
        chars += char;
    }
    for(var i = 0; i < (75 - num)/2; i++){
        leftSpace += " ";
        rightSpace += " ";
    }
    if((75 - num)/2 % 2 > 0){ rightSpace += " "}
    console.log(leftSpace + chars + rightSpace);
}

drawLeftChars(34,"A");
drawRightChars(50,"B");
drawCenteredChars(75,"C");
