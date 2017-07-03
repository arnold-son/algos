//Use combineLists(list1,list2) to build the mergeSortList(list) algorithm for
//an unsorted singly linked list. What are run-time and space complexities of
//your solution?
var SLL = require("./linkedList.js").SLL
var SLNode = require("./linkedList.js").SLNode

function mergeSortList(list){
    if(list.next === null){
        return list
    } else if (list.next.next === null){
        return combine2(list.half(),list)
    } else {
        return combine2(mergeSortList(list.half()),mergeSortList(list))
    }
}

function combine2(list1,list2){
    while(list2 !== null){
        var toBeSorted = list2;
        list2 = list2.next;
        toBeSorted.next = null;
        if(toBeSorted.val < list1.val || toBeSorted.val === list1.val){
            toBeSorted.next = list1;
            list1 = toBeSorted;
        } else {
            var runner = list1;
            while(runner){
                if(toBeSorted.val > runner.val){
                    if(runner.next === null || runner.next.val > toBeSorted.val){
                        toBeSorted.next = runner.next;
                        runner.next = toBeSorted;
                        break;
                    }
                } else if(toBeSorted.val === runner.val){
                    toBeSorted.next = runner.next;
                    runner.next = toBeSorted;
                    break;
                }
                runner = runner.next;
            }
        }
    }
    return list1;
}
var myList = SLL()
myList.valuesToSLL(5,8,2,38,27,18,1,4,7)

mergeSortList(myList.head).print()
