//Create a function uses BubbleSort to sort a linked list. The list nodes contain
//.val, .next and other attributes you should not reference.

var SLL = require("./linkedList.js").SLL
var SLNode = require("./linkedList.js").SLNode

var myList = SLL()
myList.valuesToSLL(5,8,2,38,27,18,1,4,7)
SLLBubbleSort(myList).print()
function SLLBubbleSort(list){
    var flipped = true;
    var loopCount = 1;
    while(flipped){
        flipped = false;
        var val1 = list.head;
        var preVal1 = null;
        var innerCount = 1;
        while(val1.next){
            if(val1.val > val1.next.val){
                flipped = true;
                var temp = val1.next;
                val1.next = val1.next.next;
                temp.next = val1;
                if(preVal1){
                    preVal1.next = temp;
                } else {
                    list.head = temp;
                }
                preVal1 = temp;
            } else {
                preVal1 = val1;
                val1 = val1.next;
            }
            innerCount++;
        }
        loopCount++
    }
    return list;
}
