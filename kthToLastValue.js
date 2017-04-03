function DLNode(value){
    this.val = value;
    this.prev = null;
    this.next = null;
}

function DLL(){
    this.head = null;
    this.tail = null;
    this.kToLast = function(k){
        var count = k;
        var runner = this.tail;
        while (count > 0){
            count --;
            runner = runner.prev;
            if(!runner){break}
        }
        return runner.value
    }
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
    }
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
    }
    this.add = function(headValue, ...values){
        var length = values.length;
        if(!this.head){
            this.head = new DLNode(headValue);
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
            runner.next = new DLNode(headValue);
            runner.next.prev = runner;
            runner = runner.next;
            for(var i = 0; i < length; i++){
                runner.next = new DLNode(values[i]);
                runner.next.prev = runner;
                runner = runner.next;
            }
            this.tail = runner;
        }
    }
}
var DLL1 = new DLL();
DLL1.add(1,2,3,4,5);
DLL1.add(6,7,8,9,10);
DLL1.printList();
DLL1.revPrintList();
