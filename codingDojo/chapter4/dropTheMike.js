//Create a ...

function dropTheMike(str){
    var arr = str.split(" ");
    var arr2 = [];
    for(word in arr){
        if(arr[word].length > 0){arr2.push(arr[word])}
    }
    for(word in arr2){
        if(arr2[word] === "Mike"){return "stunned silence"}
        if(arr2[word].length > 0){arr2[word] = arr2[word][0].toUpperCase() + arr2[word].slice(1)}
        console.log(word)
        console.log(arr2)
    }
    return arr2.join(" ");
}

console.log(dropTheMike("     oats beets beans and barley grow     "))
