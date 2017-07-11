//Given three separately-sorted arrays, determine the value from each array
//that creates the smallest range, and return the min and max of that range.
//All three of the arrays must have a value within the range.
//
//Example: given ([1,2,4,15],[3,10,12],[5,10,13,17,23]), return {min: 3, max: 5}

function minimalThreeArrayRange(arr1,arr2,arr3){
    var i = 0;
    var j = 0;
    var k = 0;
    var range = {min: Math.min(arr1[i],arr2[j],arr3[k]),max: Math.max(arr1[i],arr2[j],arr3[k])};

    while(i < arr1.length && j < arr2.length && k < arr3.length){
        var max = Math.max(arr1[i],arr2[j],arr3[k]);
        var min = Math.min(arr1[i],arr2[j],arr3[k]);
        if(max - min < range["max"] - range["min"]){
            range["max"] = max;
            range["min"] = min;
        }
        switch (min) {
            case arr1[i]:
                i++;
                break;
            case arr2[j]:
                j++;
                break;
            case arr3[k]:
                k++;
                break;
        }
    }
    return range;
}

console.log(minimalThreeArrayRange([1,2,4,15],[3,10,12],[5,10,13,17,23]))
