var SLL = require("../chapter12/linkedList.js").SLL

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
    this.capacity = capacity;
    this.table = [];
    this.count = 0;
    this.add = function(key, val){
        this.count++;
        var hash = key.hashCode();
        var modHash = mod(hash,this.capacity)
        if(!this.table[modHash]){
            this.table[modHash] = new SLL();
            this.table[modHash].prepend([hash,val]);
        } else {
            this.table[modHash].prepend([hash,val]);
        }
        return this;
    }
    this.isEmpty = function(){
        return this.count === 0;
    }
    this.findKey = function(key){
        var hash = key.hashCode();
        var modHash = mod(hash,this.capacity);
        if(!this.table[modHash]){
            return null;
        } else {
            var runner = this.table[modHash].head;
            while(runner){
                if(runner.val[0] === hash){
                    return runner.val[1];
                }
            }
            return null;
        }
    }
}

var myHash = new HashMap(100);
myHash.add("Darren", "Darren is great!")
console.log(myHash.findKey("Darren"))
