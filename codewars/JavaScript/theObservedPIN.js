function getPINs(observed) {
    var alternates = [["0","8"],["1","2","4"],["1","2","3","5"],["2","3","6"],
    ["1","4","5","7"],["2","4","5","6","8"],["3","5","6","9"],["4","7","8"],
    ["5","7","8","9","0"],["6","8","9"]];
    observed = observed.toString();
    var expected = alternates[observed[0]];
    for(var i = 1; i < observed.length; i++){
        expected = helper(expected,alternates[observed[i]]);
    }
    return expected;
}

function helper(arr1,arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            newArr.push(arr1[i]+arr2[j]);
        }
    }
    return newArr;
}

console.log(getPINs(369))
