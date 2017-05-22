//constructor for SLL:
function SLL(){
    this.head = null;
}
//constructor for SLNode:
function SLNode(val){
    this.val = val;
    this.next = null;
}

require("./completeSLLfunctions.js")(SLL, SLNode)

SLL.prototype.copy = function(){
    var copy = new SLL();
    if(!this.head){return copy;}
    else{
        copy.head = Object.assign({}, this.head)
    }
    var runner = copy.head;
    var runner2 = this.head.next;
    while(runner2){
        runner.next = Object.assign({}, runner2);
        runner = runner.next;
        runner2 = runner2.next;
    }
    return copy;
}

SLL.prototype.filter = function(lowVal,highVal){
    if(!this.head){console.log("empty list");return this}
    while(this.head.val < lowVal || this.head.val > highVal){
        this.head = this.head.next;
    }
    var runner = this.head;
    while(runner.next){
        if(runner.next.val < lowVal || runner.next.val > highVal){
            runner.next = runner.next.next;
        } else{
            runner = runner.next;
        }
    }
    return this;
}

var myList = new SLL();
myList.addFront(1,2,3,4,5).display()
myList.filter(2,4).display()
