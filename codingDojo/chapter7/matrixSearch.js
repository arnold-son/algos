//Mike digs image recognition and wants to create a JavaScript Imaging Library,
//just like PIL for Python. He is given 2 different two-dimensional arrays,
//containing integers between 0 and 65535. Each two-dimensional array represents
//a gray-scale image, where each integer value is a pixel. The second image
//might be found somewhere within the larger one. Return whether it is.
//
//Given array: [ [12,34,45,56],    and array: [ [67,78],    return true.
//               [98,87,76,65],                 [43,32] ]
//               [56,67,78,89],
//               [54,43,32,21] ]
[[12,34,45,56],[98,87,76,65],[56,67,78,89],[54,43,32,21]]
function matrixSearch(arr1,arr2){
    //find left corner value of arr2 within arr1
    for(var y = 0; y <= arr1.length - arr2.length; y++){
        for(var x = 0; x <= arr1[0].length - arr2[0].length; x++){
            if(arr1[y][x] === arr2[0][0]){
                if(searchHelper(arr1,arr2,x,y) === true){
                    return true;
                }
            }
        }
    }
    return false;
}

function searchHelper(arr1,arr2,x,y){
    for(var y2 = 0; y2 < arr2.length; y2++){
        for(var x2 = 0; x2 < arr2[0].length; x2++){
            if(arr2[y2][x2] !== arr1[y+y2][x+x2]){
                return false;
            }
        }
    }
    return true;
}
var arr1 = [[12,34,45,56],[98,87,76,65],[56,67,78,89],[54,43,32,21]];
var arr2 = [[67,78],[43,32]];
// console.log(matrixSearch(arr1,arr2))

//Second: Return location of first match found ([-1,-1] if no match).
//In example above, return [2,1].

function matrixSearch2(arr1,arr2){
    //find left corner value of arr2 within arr1
    for(var y = 0; y <= arr1.length - arr2.length; y++){
        for(var x = 0; x <= arr1[0].length - arr2[0].length; x++){
            if(arr1[y][x] === arr2[0][0]){
                if(searchHelper(arr1,arr2,x,y) === true){
                    return [y,x];
                }
            }
        }
    }
    return [-1,-1];
}

console.log(matrixSearch2(arr1,arr2))
