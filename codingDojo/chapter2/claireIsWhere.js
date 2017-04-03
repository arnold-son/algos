//On New Year's Eve, have fun but don't forget your way home! For this challenge
//create four functions (reset, moveBy, xLocation and yLocation) to track the
//travels of Claire, a wanderer. Calling reset() moves Clair home to the origin
//(0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those
//directions. Finally, xLocation() and yLocation() return how far Claire is from
//home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2),
//and moveBy(3,1), subsequently calling xLocation() and yLocation() should
//return 4 and -1
//
//Second: create distFromHome(). Assuming she moves diagonally, return her
//distance form home.

var claire = [0,0]
var distance = 0;

function reset(){
    claire = [0,0];
    distance = 0;
}
function xLocation(){
    return claire[0];
}
function yLocation(){
    return claire[1];
}

function moveBy(xOffset,yOffset){
    claire[0]+=xOffset;
    claire[1]+=yOffset;
    distance+=Math.sqrt((xOffset*xOffset)+(yOffset*yOffset));
}
function distFromHome(){
    return distance;
}
moveBy(1,-2);
moveBy(3,1);
moveBy(1,-2);
moveBy(3,1);
console.log(xLocation(),yLocation(),distFromHome());
