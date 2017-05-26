function isIsogram(str){
    if(str === ""){return true}
    var map = {};
    for(var i = 0; i < str.length; i++){
        if(!map[str[i].toUpperCase()] && !map[str[i].toLowerCase()]){
            map[str[i]] = true;
        } else {
            return false;
        }
    }
    return true;
}
