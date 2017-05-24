function SLNode (val) {
    this.val = val;
    this.next = null;
}

function SLQueue () {
    var head = null;
    var tail = null;
    this.enqueue = function(val){
        if(!head){
            head = new SLNode(val);
            tail = head;
        } else {
            tail.next = new SLNode(val);
            tail = tail.next;
        }
        return this;
    }
    this.dequeue = function(){
        if(!head){ return null}
        var temp = head;
        head = head.next;
        return temp;
    }
    this.front = function(){
        return head;
    }
    this.contains = function(val){
        var runner = head;
        while(runner){
            if(runner.val === val){return true}
            runner = runner.next;
        }
        return false;
    }
    this.isEmpty = function(){
        if(!head){
            return true
        } else{
            return false;
        }
    }
    this.size = function(){
        if(!head){return 0}
        var size = 0;
        var runner = head;
        while(runner){
            size++;
            runner = runner.next;
        }
        return size;
    }
    this.compareQueues = function(otherQueue){
        if(!head && !otherQueue.front()){ return true }
        var runner1 = head;
        var runner2 = otherQueue.front();
        while(runner1 || runner2){
            if(!runner1 || !runner2){return false}
            else if(runner1.val !== runner2.val){return false}
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return true;
    }
}

var queue = new SLQueue();
var queue2 = new SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
queue2.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6);

console.log(queue.compareQueues(queue2))
