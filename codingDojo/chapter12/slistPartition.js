//Partition a singly linked list. Use the first element as pivot; return the
//new list. List nodes contain .val and .next; do not reference other attributes.
//For example, if you are given the following linked list:
// { 5=>1=>8=>4=>9=>2=>5=>3 }, you should return: { 1=>4=>2=>3=>5=>8=>9=>5 }.
var SLL = require("./linkedList.js").SLL
var SLNode = require("./linkedList.js").SLNode

function partition(list){
    var pivot = list.head;
    var runner = list.head;
    while(runner.next){
        if(runner.next.val < pivot.val){
            var temp = runner.next;
            runner.next = runner.next.next;
            temp.next = list.head;
            list.head = temp;
        } else {
            runner = runner.next;
        }
    }
    return list;
}

var test = SLL().valuesToSLL(5,1,8,4,9,2,5,3)
partition(test).print()
