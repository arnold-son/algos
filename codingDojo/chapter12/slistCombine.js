//Create a function that combines two already-sorted linked lists, returning a
//sorted list with both inputs. List nodes contain .val, .next and other
//attributes that you should not reference.

var SLL = require("./linkedList.js").SLL
var SLNode = require("./linkedList.js").SLNode

function combine(list1,list2){
    while(list2.head !== null){
        var toBeSorted = list2.head;
        list2.head = list2.head.next;
        toBeSorted.next = null;
        if(toBeSorted.val < list1.head.val || toBeSorted.val === list1.head.val){
            toBeSorted.next = list1.head;
            list1.head = toBeSorted;
        } else {
            var runner = list1.head;
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

var testlist1 = SLL().valuesToSLL(1,2,3,4,5)
var testlist2 = SLL().valuesToSLL(6,7,8,9,10)
var testlist3 = SLL().valuesToSLL(1,5,8,10,12,48)
var testlist4 = SLL().valuesToSLL(6,9,11,50,100)

combine2(testlist3.head,testlist4.head).print()
