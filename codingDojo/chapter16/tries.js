function TrieNode(val){
    this.val = val;
    this.isWord = false;
    this.children = {};
    this.insert = function(str){
        if(str.length === 0){
            return;
        }
        var child = this.children[str[0]];
        if(!child){
            this.children[str[0]] = new TrieNode(str[0]);
            child = this.children[str[0]];
        }
        if(!str[1]){
            child.isWord = true;
        }
        child.insert(str.slice(1));
    }
    this.contains = function(str){
        if(str.length === 0){
            return this.isWord;
        }
        var child = this.children[str[0]];
        if(!child){
            return false;
        }
        return child.contains(str.slice(1));
    }
    this.first = function(str){
        str += this.val;
        if(this.isWord){
            return str;
        }
        var letters = Object.keys(this.children);
        function min(arr){
            var min = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if(arr[i] < min){
                    min = arr[i];
                }
            }
            return min;
        }
        var firstLetter = this.children[min(letters)];
        return firstLetter.first(str);
    }
    this.last = function(str){
        str += this.val;
        var letters = Object.keys(this.children);
        if(letters.length === 0){
            return str;
        }
        function max(arr){
            var max = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if(arr[i] > max){
                    max = arr[i];
                }
            }
            return max;
        }
        var lastLetter = this.children[max(letters)];
        return lastLetter.last(str);
    }
    this.remove = function(str,parent,key){
        if(str.length === 0){
            var children = Object.keys(this.children).length;
            if(children === 0){
                delete parent.children[key];
            } else {
                this.isWord = false;
            }
            return true;
        }
        var child = this.children[str[0]];
        if(!child){ return false }
        if(this.isWord){
            parent = this;
            key = str[0];
        }
        return child.remove(str.slice(1),parent,key);
    }
}

function TrieSet(){
    this.root = new TrieNode('');
    this.insert = function(str){
        if(str.length === 0){
            return;
        }
        return this.root.insert(str.toLowerCase());
    }
    this.contains = function(str){
        return this.root.contains(str.toLowerCase());
    }
    this.first = function(){
        return this.root.first('');
    }
    this.last = function(){
        return this.root.last('');
    }
    this.remove = function(str){
        str = str.toLowerCase();
        var firstChild = this.root.children[str[0]];
        if(firstChild){
            return firstChild.remove(str.slice(1),this.root,str[0]);
        }=
        return false;
    }
}

var myTrie = new TrieSet();
myTrie.insert("car");
myTrie.insert("care")
myTrie.insert("careful")
console.log(myTrie.first());
console.log(myTrie.last());
console.log(myTrie.remove("careful"))
console.log(myTrie.contains("car"))
console.log(myTrie.contains("care"))
console.log(myTrie.contains("careful"))
