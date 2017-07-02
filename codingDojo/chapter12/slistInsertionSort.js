//Use insertion sort to sort singly linked lists. Only reference ListNode
//attributes .val and .next. What are the run-time and space complexities?

var SLL = require("./linkedList.js").SLL
var SLNode = require("./linkedList.js").SLNode

function insertionSort(list){
    var sorted = list.head;
    list.head = list.head.next;
    sorted.next = null;
    while(list.head !== null){
        var toBeSorted = list.head;
        list.head = list.head.next;
        toBeSorted.next = null;
        if(toBeSorted.val < sorted.val){
            toBeSorted.next = sorted;
            sorted = toBeSorted;
        } else {
            var runner = sorted;
            while(runner){
                if(toBeSorted.val > runner.val){
                    if(runner.next === null || runner.next.val > toBeSorted.val){
                        toBeSorted.next = runner.next;
                        runner.next = toBeSorted;
                        break;
                    }
                }
                runner = runner.next;
            }
        }
    }
    list.head = sorted;
    return list;
}

var testList = SLL().valuesToSLL(3,44,38,5,47,15,36,26,27,2,46,4,19,50,48)
insertionSort(testList)
testList.print()
