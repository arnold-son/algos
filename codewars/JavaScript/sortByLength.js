function sortByLength (array) {
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
            if(array[i].length > array[j].length){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

console.log(sortByLength(["Beg", "Life", "I", "To"]))
