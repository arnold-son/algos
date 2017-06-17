var SLNode = require("./SLNode.js")()
var SList = require("./SList.js")()
SList.prototype.addBack = function(...vals){
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
SList.prototype.display = function(){
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
var myList = new SList();
myList.addBack(1,2,3,4,5).display()
myList.reverse()
myList.display()
