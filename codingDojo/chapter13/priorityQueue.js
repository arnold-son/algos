module.exports = function PriQueue(){
    function PriQNode(val,pri){
        if(!(this instanceof PriQNode)){
            return new PriQNode(val,pri);
        }
        this.val = val;
        this.pri = pri;
        this.next = null;
    }
    if(!(this instanceof PriQueue)){
        return new PriQueue();
    }
    this.head = null;
    this.enqueue = function(val,pri){
        if(!this.head){
            this.head = PriQNode(val,pri);
        } else {
            var newNode = PriQNode(val,pri)
            if(pri < this.head.pri){
                newNode.next = this.head;
                this.head = newNode;
            } else {
                var runner = this.head;
                while(runner.next){
                    if(pri < runner.next.pri){
                        newNode.next = runner.next;
                        runner.next = newNode;
                        return this;
                    }
                    runner = runner.next;
                }
                if(newNode.next === null){
                    runner.next = newNode;
                    return this;
                }
            }
        }
    }
    this.dequeue = function(){
        if(!this.head){
            return null;
        } else {
            var temp = this.head;
            this.head = this.head.next;
            return temp;
        }
    }
}
