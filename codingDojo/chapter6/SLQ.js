function SLNode (val) {
    this.val = val;
    this.next = null;
}

function SLQueue () {
    var head = null;
    var tail = null;
    this.display = function(){
        if(!head){ console.log("Head -> [null] <- Tail"); return this}
        var str = "Head"
        var runner = head;
        while(runner){
            str+= " -> " + "[" + runner.val + "]"
            runner = runner.next;
        }
        str+= " <- Tail"
        console.log(str);
        return this;
    }
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
    this.removeMins = function(){
        if(!head){console.log("Empty list");return this}
        var min = head.val;
        var runner = head.next;
        while(runner){
            if(runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        while(head.val === min){head = head.next};
        runner = head;
        while(runner.next){
            if(runner.next.val === min){
                runner.next = runner.next.next;
            } else{
                runner = runner.next;
            }
        }
        console.log("The minimum value " + min + " was removed.")
        return this;
    }
    this.removeLastMin = function(){
        if(!head){console.log("Empty list");return this}
        var min = head.val;
        var runner = head.next;
        while(runner){
            if(runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        var nodePrevToLastMin;
        runner = head;
        while(runner.next){
            if(runner.next.val === min){
                nodePrevToLastMin = runner;
            }
            runner = runner.next;
        }
        if(nodePrevToLastMin){nodePrevToLastMin.next = nodePrevToLastMin.next.next}
        else{head = head.next}
        console.log("The last minimum value " + min + " was removed.")
        return this;
    }
}

var queue = new SLQueue();
var queue2 = new SLQueue();
queue.enqueue(1).enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).display();
queue2.enqueue(10).enqueue(8).enqueue(1).enqueue(2).enqueue(3).enqueue(1).enqueue(1).enqueue(1).enqueue(4).enqueue(5).enqueue(6).display();
queue.removeLastMin().display().removeLastMin().display()
queue2.removeMins().display()
