function groupCheck(s){
    if(s === ""){return true}
    var open = [];
    for(var i = 0; i < s.length; i++){
        switch(s[i]){
            case "(":
                open.push(")");
                break;
            case "{":
                open.push("}");
                break;
            case "[":
                open.push("]");
                break;
            case open.pop():
                break;
            default:
                return false;
        }
    }
    return open.length === 0;
}
