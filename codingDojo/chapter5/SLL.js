//constructor for SLL:
function SLL(){
    this.head = null;
}
//constructor for SLNode:
function SLNode(val){
    this.val = val;
    this.next = null;
}
//SLNode functions:
SLNode.prototype.display = function(){
    runner = this;
    var string = ""
    while(runner){
        string+="["+runner.val+"]";
        if(runner.next){string+=" -> "}
        runner = runner.next;
    }
    console.log(string);
    return this;
}
//SLL functions:

SLL.prototype.removeNegatives = function(){
    if(!this.head){console.log("Empty list");return null}
    while(this.head.val < 0){this.head = this.head.next}
    var runner = this.head;
    while(runner.next){
        if(runner.next.val < 0){runner.next = runner.next.next;}
        else{runner = runner.next}
    }
    return this;
}
SLL.prototype.splitOnValue = function(val){
    if(!this.head){console.log("Empty list");return null}
    if(this.head.val === val){var temp = this.head; this.head = null; return temp;}
    var runner = this.head;
    while(runner.next){
        if(runner.next.val === val){
            var temp = runner.next
            runner.next = null;
            return temp;
        }
        runner = runner.next;
    }
    console.log("value not found")
    return null
}
SLL.prototype.removeVal = function(val){
    if(!this.head){console.log("Empty list");return this}
    if(this.head.val === val){this.head = this.head.next; return this;}
    var runner = this.head;
    while(runner.next){
        if(runner.next.val === val){
            runner.next = runner.next.next;
            console.log("Successfully removed")
            return this;
        }
    }
    console.log("Value not found");
    return this;
}
SLL.prototype.appendVal = function(val,after){
    if(!this.head){
        this.head = new SLNode(val);
        return this;
    }
    var runner = this.head;
    while(runner.next){
        if(runner.val === after){
            var temp = runner.next;
            runner.next = new SLNode(val);
            runner.next.next = temp;
            return this;
        }
        runner = runner.next
    }
    runner.next = new SLNode(val);
    return this;
}
SLL.prototype.prependVal = function(val,before){
    if(!this.head || this.head.val === before){
        if(this.head){var temp = this.head}
        this.head = new SLNode(val);
        if(temp){this.head.next = temp;}
        return this;
    }
    var prevRunner;
    var runner = this.head;
    while(runner.next){
        if(runner.next.val === before){
            var temp = runner.next;
            runner.next = new SLNode(val);
            runner.next.next = temp;
            return this;
        }
        runner = runner.next;
    }
    runner.next = new SLNode(val);
    return this;
}
SLL.prototype.moveMaxToBack = function(){
    if(!this.head){console.log("Empty list");return this}
    if(!this.head.next){console.log("Only one node present in list");return this}
    var nodeBeforeMax;
    var maxNode = this.head;
    var runner = this.head;
    while(runner.next){
        if(runner.next.val > maxNode.val){
            maxNode = runner.next;
            nodeBeforeMax = runner;
        }
        runner = runner.next;
    }
    if(maxNode.next){
        runner.next = maxNode;
        nodeBeforeMax.next = maxNode.next;
        maxNode.next = null
    }
    return this;
}
SLL.prototype.moveMinToFront = function(){
    if(!this.head){console.log("Empty list");return this}
    if(!this.head.next){console.log("Only one node present in list");return this}
    var nodeBeforeMin;
    var minNode = this.head;
    var runner = this.head;
    while(runner.next){
        if(runner.next.val < minNode.val){
            minNode = runner.next;
            nodeBeforeMin = runner;
        }
        runner = runner.next;
    }
    if(nodeBeforeMin){
        var temp = nodeBeforeMin.next;
        nodeBeforeMin.next = nodeBeforeMin.next.next;
        temp.next = this.head;
        this.head = temp;
    }
    return this;
}
SLL.prototype.addBack = function(...vals){
    if(vals.length < 1){console.log("Must provide values to add.");return this;}
    var start = 0;
    if(!this.head){this.head = new SLNode(vals[start]);start++}
    var runner = this.head;
    while(runner.next){runner=runner.next}
    while(vals[start]){
        runner.next = new SLNode(vals[start]);
        runner = runner.next;
        start++;
    }
    return this;
}
SLL.prototype.removeBack = function(){
    if(!this.head){console.log("Empty list"); return null}
    if(!this.head.next){console.log("Removed value: "+this.head.val);this.head = null;return this}
    var runner = this.head;
    while(runner.next.next){
        runner = runner.next;
    }
    console.log("Removed value: "+runner.next.val);
    runner.next = null;
    return this;
}
SLL.prototype.back = function(){
    if(!this.head){console.log("Empty list"); return null}
    var runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    console.log("The last value is: " + runner.val);
    return runner.val;
}
SLL.prototype.secondMax = function(){
    if(this.length() < 2){console.log("The list must contain more than 1 value."); return null}
    var max = this.head.val;
    var secondMax;
    var runner = this.head.next;
    while(runner){
        if(runner.val > max){
            secondMax = max;
            max = runner.val;
        }
        else if(!secondMax || secondMax < runner.val){
            secondMax = runner.val;
        }
        runner = runner.next;
    }
    console.log("Second maximum: " + secondMax);
    return secondMax;
}
SLL.prototype.kToLast = function(k){
    if(this.length() < k+1){console.log("value at k to last does not exist.");return null}
    var runner = this.head;
    var krunner = this.head;
    //runner is k places ahead of krunner after loop:
    for(var i = 0; i < k; i++){runner = runner.next}
    while(runner.next){
        runner = runner.next;
        krunner = krunner.next;
    }
    //after while loop, runner is the last node on the SLL. krunner is still
    //k nodes behind runner, so it is now on the node k nodes from the last node.
    console.log("k to last value: " + krunner.val);
    return krunner.val;
}
SLL.prototype.addFront = function(...vals){
    if(vals.length < 1){console.log("Must provide values to add.");return this;}
    var start = vals.length-1;
    if(!this.head){this.head = new SLNode(vals[start]);start--}
    for(var i = start; i >= 0; i--){
        var temp = new SLNode(vals[i]);
        temp.next = this.head;
        this.head = temp;
    }
    return this;
}
SLL.prototype.removeFront = function(){
    if(!this.head){console.log("Empty list");return null}
    this.head = this.head.next;
    return this
}
SLL.prototype.contains = function(val){
    if(!this.head){console.log("Empty list");return false}
    runner = this.head;
    while(runner){
        if(runner.val === val){return true}
        runner = runner.next;
    }
    return false;
}
SLL.prototype.front = function(){
    if(!this.head){console.log("Empty list");return null}
    return this.head.val;
}
SLL.prototype.length = function(){
    if(!this.head){console.log("Empty list");return 0}
    runner = this.head;
    count = 0;
    while(runner){count++;runner = runner.next;}
    return count;
}
SLL.prototype.max = function(){
    if(!this.head){console.log("Empty list");return null}
    var max = this.head.val;
    runner = this.head.next;
    while(runner){
        if(runner.val > max){max = runner.val}
        runner = runner.next;
    }
    return max;
}
SLL.prototype.min = function(){
    if(!this.head){console.log("Empty list");return null}
    var min = this.head.val;
    runner = this.head.next;
    while(runner){
        if(runner.val < min){min = runner.val}
        runner = runner.next;
    }
    return min;
}
SLL.prototype.average = function(){
    if(!this.head){console.log("Empty list");return null}
    var sum = this.head.val;
    runner = this.head.next;
    while(runner){
        sum+=runner.val;
        runner = runner.next;
    }
    return sum/this.length()
}
SLL.prototype.display = function(){
    if(!this.head){console.log("Head -> [null]");return this}
    runner = this.head;
    var string = "Head -> ";
    while(runner){
        string+="["+runner.val+"]";
        if(runner.next){string+=" -> "}
        runner = runner.next;
    }
    console.log(string);
    return this;
}
SLL.prototype.reverse = function(){
    var passenger = this.head;
    while(passenger.next){
        var temp = this.head;
        this.head = passenger.next;
        passenger.next = passenger.next.next;
        this.head.next = temp;
    }
    return this;
}

var myList = new SLL();
myList.addFront(13,5,3,7,2,9,10,1,28,4,6).display().removeNegatives().display()
myList.addBack(-1,-5,-12,-48,5,-82,58).addFront(-2,0,47,-48,-57,7,-39).display().removeNegatives().display()
