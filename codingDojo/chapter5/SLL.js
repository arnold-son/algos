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

SLL.prototype.zip = function(secondList){
    if(!this.head || !secondList.head){console.log("One or more lists are empty."); return this}
    var zippedList = new SLL();
    zippedList.head = Object.assign({}, this.head);
    var runner1 = secondList.head;
    var runner2 = this.head.next;
    var zippedRunner = zippedList.head;
    while(runner1){
        zippedRunner.next = Object.assign({}, runner1);
        zippedRunner = zippedRunner.next;
        var temp = runner1;
        runner1 = runner2;
        runner2 = temp;
        runner2 = runner2.next;
    }
    return zippedList;
}

var myList = new SLL();
var myList2 = new SLL();
myList.addFront(1,1,1,1,1).display()
myList2.addFront(2,2,2,2,2).display()
myList.zip(myList2).display()
myList.display()
myList2.display()
