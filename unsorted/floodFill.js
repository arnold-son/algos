var canvas = [[3,2,3,4,3],
              [2,3,3,4,0],
              [7,3,3,5,3],
              [6,5,3,4,1],
              [1,2,3,3,3]]
var xy = [2,1]
var color = 1
//expected output: [[3,2,1,4,3],
//                  [2,1,1,4,0],
//                  [7,1,1,5,3],
//                  [6,5,1,4,1],
//                  [1,2,1,1,1]]
function floodFill(canvas2D, startXY, newColor){
    console.log(startXY[0],startXY[1])
    var oldColor = canvas2D[canvas2D.length-startXY[1]][startXY[0]]
    console.log(oldColor)
    console.log(canvas2D.length-startXY[1])
    canvas2D[canvas2D.length-startXY[1]][startXY[0]] = newColor

    if(canvas2D[(canvas2D.length-startXY[1])-1] != undefined){
        console.log("hi")
        if(canvas2D[(canvas2D.length-startXY[1])-1][startXY[0]] == oldColor){
            console.log("hello")
            floodFill(canvas2D, [startXY[0],startXY[1]-1], newColor)
        }
    }
    if(canvas2D[canvas2D.length-startXY[1]][startXY[0]-1] == oldColor){
        console.log("hi2")
        floodFill(canvas2D, [startXY[0]-1,startXY[1]], newColor)
    }
    if(canvas2D[canvas2D.length-startXY[1]][startXY[0]+1] == oldColor){
        console.log("hi3")
        floodFill(canvas2D, [startXY[0]+1,startXY[1]], newColor)
    }
    if(canvas2D[(canvas2D.length-startXY[1])+1] != undefined){
        console.log("hi3")
        if(canvas2D[(canvas2D.length-startXY[1])+1][startXY[0]] == oldColor){
            floodFill(canvas2D, [startXY[0],startXY[1]+1], newColor)
        }
    }
}
console.log(canvas)
floodFill(canvas,xy,1)
console.log(canvas)
