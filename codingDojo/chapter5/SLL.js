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

var myList = new SLL();
myList.addFront(1,2,4,2,56,8,2,783,123,5,2,5,234,21,31,23,12,312312312).display();
myList.secondLargest();
