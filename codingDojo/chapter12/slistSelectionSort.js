//Create a function that sorts a singly linked list using selection sort.
//Nodes contain .val, .next and other attributes you should not reference.

var SLL = require("./linkedList.js").SLL
var SLNode = require("./linkedList.js").SLNode

function selectionSort(list){
    var preRunner = null;
    var runner = list.head;
    while(runner.next){
        var min = runner.val;
        var nodePreMin = null;
        var runner2 = runner;
        while(runner2.next){
            if(runner2.next.val < min){
                min = runner2.next.val;
                nodePreMin = runner2;
            }
            runner2 = runner2.next
        }
        if(nodePreMin !== null){
            if(runner === list.head){
                console.log("swapping head")
                list.swapHead(nodePreMin)
                preRunner = list.head;
                runner = list.head.next;
                list.print()
            } else {
                console.log("swapping two nodes", "preNode1: ", preRunner , "preNode2: ", nodePreMin)
                list.print()
                list.swap2Nodes(preRunner,nodePreMin)
                list.print()
                preRunner = preRunner.next;
                runner = preRunner.next;
            }
        } else {
            preRunner = runner;
            runner = runner.next;
        }
    }
    return list
}

var myList = SLL()
myList.valuesToSLL(5,8,2,38,27,18,1,4,7).print()
selectionSort(myList).print()
