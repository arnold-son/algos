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

SLL.prototype.secondLargest = function(){
    if(!this.head){console.log("empty list"); return this}
    var max = this.head.val;
    var secondMax;
    var runner = this.head.next;
    while(runner){
        if(runner.val > max){
            secondMax = max;
            max = runner.val;
        } else if(!secondMax || runner.val > secondMax){
            secondMax = runner.val;
        }
        runner = runner.next;
    }
    console.log("The second-largest value is: " + secondMax)
    return secondMax;
}

SLL.prototype.dedupe = function(){
    if(!this.head){console.log("empty list"); return this}
    var map = {};
    map[this.head.val] = true;
    var runner = this.head;
    while(runner.next != null){
        if(!map[runner.next.val]){
            map[runner.next.val] = true;
            runnerPrev = runner;
            runner = runner.next;
        } else {
            runner.next = runner.next.next;
        }
    }
    return this;
}

var myList = new SLL();
myList.addFront(1,2,1,1,2,2,2,1,1,1,1).display();
myList.dedupe().display();
