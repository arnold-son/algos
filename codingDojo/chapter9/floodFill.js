//Most graphical "paint" applications, have a 'paintcan fill' function that
//floods part of an image with a certain color. We change the image as if we
//painted a

var canvas =
[  [3,2,3,4,3],
   [2,3,3,4,0],
   [7,3,3,5,3],
   [6,5,3,4,1],
   [1,2,3,3,3] ]

function floodFill(canvas2D,startXY,newColor,oldColor){
    console.log(startXY)
    if(oldColor === undefined){oldColor = canvas2D[startXY[1]][startXY[0]]}
    if(oldColor === newColor){ console.log("colors are same"); return}
    if(canvas2D[startXY[1]][startXY[0]] === oldColor){
        canvas2D[startXY[1]][startXY[0]] = newColor;
    } else {
        return
    }
    if(startXY[1]-1 > -1){
        floodFill(canvas2D,[startXY[0],startXY[1]-1],newColor,oldColor);
    }
    if(startXY[0]-1 > -1){
        floodFill(canvas2D,[startXY[0]-1,startXY[1]],newColor,oldColor)
    }
    if(startXY[0]+1 < canvas2D[0].length){
        floodFill(canvas2D,[startXY[0]+1,startXY[1]],newColor,oldColor)
    }
    if(startXY[1]+1 < canvas2D.length){
        floodFill(canvas2D,[startXY[0],startXY[1]+1],newColor,oldColor)
    }
}

floodFill(canvas,[2,2],1)
console.log(canvas)
