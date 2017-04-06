function DLNode(value){
    this.val = value;
    this.prev = null;
    this.next = null;
}

function DLL(){
    this.head = null;
    this.tail = null;
    //returns .val of DLNode k distance from its tail
    //examples: myList == DLL with node values (1,2,3,4,5);
    //myList.kToLast(0) => 5; myList.kToLast(1) => 4; myList.kToLast(4) => 1;
    //myList.kToLast(6) => null; myList.kToLast(7) => null;
    this.kToLast = function(k){
        if(this.count() < k+1){
            return null
        }
        else if(this.count() == k+1){
            return this.head.val;
        }
        else if(this.count() > k+1){
            var runner = this.tail;
            for(var i = 0; i < k; i++){
                runner = runner.prev;
            }
            return runner.val;
        }
        console.log("this is an error")
    }
    //prints DLL in forward direction
    this.printList = function(){
        if(this.head){
            runner = this.head
            while(runner){
                console.log(runner.val);
                runner = runner.next;
            }
        }
        else{
            console.log("nothing to print")
        }
        return this;
    }
    //prints DLL in reverse direction
    this.revPrintList = function(){
        if(this.tail){
            runner = this.tail;
            while(runner){
                console.log(runner.val);
                runner = runner.prev;
            }
        }
        else{
            console.log("nothing to print")
        }
        return this;
    }
    //appends given values as newnodes to the end of the list
    this.append = function(firstValue, ...values){
        var length = values.length;
        if(!this.head){
            this.head = new DLNode(firstValue);
            if(!length){
                this.tail = this.head;
            }
            else{
                var runner = this.head;
                for(var i = 0; i < length; i++){
                    runner.next = new DLNode(values[i]);
                    runner.next.prev = runner;
                    runner = runner.next;
                }
                this.tail = runner
            }
        }
        else{
            var runner = this.tail;
            runner.next = new DLNode(firstValue);
            runner.next.prev = runner;
            runner = runner.next;
            for(var i = 0; i < length; i++){
                runner.next = new DLNode(values[i]);
                runner.next.prev = runner;
                runner = runner.next;
            }
            this.tail = runner;
        }
        return this;
    }
    //appends given values to start of list in reverse order
    this.prepend = function(firstValue, ...values){
        var length = values.length;
        if(!this.head){
            this.head = new DLNode(firstValue);
            if(!length){
                this.tail = this.head;
            }
            else{
                var runner = this.head;
                for(var i = 0; i < length; i++){
                    runner.next = new DLNode(values[i]);
                    runner.next.prev = runner;
                    runner = runner.next;
                }
                this.tail = runner
            }
        }
        else{
            var runner = this.head;
            runner.prev = new DLNode(firstValue);
            runner.prev.next = runner;
            runner = runner.prev;
            for(var i = 0; i < length; i++){
                runner.prev = new DLNode(values[i]);
                runner.prev.next = runner;
                runner = runner.prev;
            }
            this.head = runner;
        }
        return this;
    }
    //returns the number of nodes in a DLL as an integer
    this.count = function(){
        if(!this.head){
            console.log("nothing to count");
            return 0;
        }
        else{
            var count = 0;
            var runner = this.head;
            while(runner){
                count ++;
                runner = runner.next;
            }
            console.log("the list has "+ count + " nodes.");
            return count;
        }
    }
    //reverses the DLL
    this.reverse = function(){
        var count = this.count();
        if(count<2){
            console.log("Nothing to reverse");
            return this;
        }
        this.head = this.tail;
        var forwardRunner = this.tail;
        var backwardRunner = this.tail.prev;
        for(var i = 1; i < count; i++){
            forwardRunner.next = backwardRunner;
            backwardRunner = backwardRunner.prev;
            forwardRunner.next.prev = forwardRunner;
            forwardRunner = forwardRunner.next;
        }
        this.tail = forwardRunner;
        this.tail.next = null;
        this.head.prev = null;
        return this;
    }
}
var DLL1 = new DLL();
DLL1.append(1,2,3,4,5,6,7,8,9,10).printList().reverse().printList();
console.log(DLL1.count());
