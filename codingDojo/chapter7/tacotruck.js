//Joe drives a taco truck in the booming town of Squaresburg. He uses an array
//of [x,y] coordinates corresponding to locations of his customers. They walk
//to his truck, but he is fair-minded so he wants to minimize total distance
//from truck to customers. City blocks are perfect squares, and every street is
//two-way, at perfect right angles. He only parks by street corners (coordinates
//like [37,-16]). Customers only travel on streets: coordinate [2,-2] is
//distance 4 from [0,0]. Joe checks the array before deciding where to park.
//Given a customer coordinate array, return an optimal taco truck location.
//Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0], as total distance
//is 25 (8+13+4).

function tacotruck(coords){
    var minX = coords[0][0];
    var maxX = coords[0][0];
    var minY = coords[0][1];
    var maxY = coords[0][1];
    for(var i = 0; i < coords.length; i++){
        if(minX > coords[i][0]){
            minX = coords[i][0];
        }
        if(minY > coords[i][1]){
            minY = coords[i][1];
        }
        if(maxX < coords[i][0]){
            maxX = coords[i][0];
        }
        if(maxY < coords[i][1]){
            maxY = coords[i][1];
        }
    }

    var opt = [minX, minY];
    var optDistance = 0;
    for(var i = 0; i < coords.length; i++){
        optDistance += Math.abs(minX - coords[i][0]) + Math.abs(minY - coords[i][1]);
    }

    var x = minX;
    var y = minY;
    while( x <= maxX && y <= maxY){
        if(x !== minX && y !== minY){
            var distance = 0;
            for(var i = 0; i < coords.length; i++){
                distance += Math.abs(x - coords[i][0]) + Math.abs(y - coords[i][1]);
            }
            if(optDistance > distance){
                opt[0] = x;
                opt[1] = y;
                optDistance = distance;
            }
        }
        if(x === maxX){
            x = minX;
            y++;
        } else {
            x++;
        }
    }
    return opt;
}
console.log(tacotruck([ [10,0], [-1,-10], [2,4] ]))
