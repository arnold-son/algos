//using arrays instead of SLL

function mod(input,div)
{ return (input % div + div) % div; }

String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash &= hash;
    }
    return hash;
}

function HashMap(capacity){
    if(!(this instanceof HashMap)){
        return new HashMap(capacity);
    }
    this.count = 0;
    this.capacity = capacity;
    this.table = [];
    this.addMap = function(hashmap){
        for (var i = 0; i < hashmap.capacity; i++) {
            for (var j = 0; j < hashmap.table[i].length; j++) {
                this.add(hashmap.table[i][j][0],hashmap.table[i][j][1]);
            }
        }
    }
    this.grow = function(){
        this.capacity = Math.floor(this.capacity * 1.5)
        for (var i = 0; i < this.table.length; i++) {
            if(!this.table[i]){ continue }
            for(var j = this.table[i].length - 1; j >= 0; j--){
                var modHash = mod(this.table[i][0].hashCode(),this.capacity);
                if(i !== modHash){
                    this.add(this.table[i][0],this.table[i][1]);
                    this.table[i].splice(j,1);
                }
            }
        }
    }
    this.setSize = function(newCap){
        this.capacity = newCap;
        for (var i = 0; i < this.table.length; i++) {
            if(!this.table[i]){ continue }
            for(var j = this.table[i].length - 1; j >= 0; j--){
                var modHash = mod(this.table[i][0].hashCode(),this.capacity);
                if(i !== modHash){
                    this.add(this.table[i][0],this.table[i][1]);
                    this.table[i].splice(j,1);
                }
            }
        }
        this.table.length = this.capacity;
    }
    this.loadFactor = function(){
        return this.count/this.capacity
    }
    this.remove = function(key){
        var modHash = mod(key.hashCode(),this.capacity);
        if(!this.table[modHash]){
            return null;
        } else {
            var index = this.table[modHash].findIndex((keyValuePair) => key === keyValuePair[0]);
            if(index === -1){
                return null
            } else {
                this.count--;
                var toBeRemoved = this.table[modHash][index][1];
                this.table[modHash].splice(index,1);
                return toBeRemoved;
            }
        }
    }
    this.add = function(key,val){
        var modHash = mod(key.hashCode(),this.capacity);
        if(!this.table[modHash]){
            this.count++;
            this.table[modHash] = [[key,val]];
        } else {
            var oldIndex = this.table[modHash].findIndex((keyValuePair) => key === keyValuePair[0])
            if(oldIndex === -1){
                this.table[modHash].push([key,val]);
                this.count++;
            } else {
                this.table[modHash][oldIndex][1] = val;
            }
        }
        return this;
    }
    this.isEmpty = function(){
        return this.count === 0;
    }
    this.findKey = function(key){
        var modHash = mod(key.hashCode(),this.capacity);
        if(!this.table[modHash]){
            return null;
        } else {
            var searchResult = this.table[modHash].find(function(keyValuePair){
                return keyValuePair[0] === key;
            })
            return searchResult !== undefined ? searchResult[1] : null;
        }
    }
}
var myHashMap = HashMap(20);
myHashMap.add("coding","ninja")
console.log(myHashMap.findKey("coding"))
console.log(myHashMap.loadFactor())
