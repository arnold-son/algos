//Associative arrays are also called hashes (we'll learn why later). Build
//invertHash(assocArr) to convert hash keys to values, and values to keys.
//Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"},
//return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

function invertHash(assocArr){
    for(key in assocArr){
        assocArr[assocArr[key]] = key;
        delete assocArr[key];
    }
    return assocArr;
}

console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}))
