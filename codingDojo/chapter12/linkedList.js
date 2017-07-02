module.exports = {
    SLNode: function SLNode(val){
        if(!(this instanceof SLNode))
        { return new SLNode(val) }
        this.val = val;
        this.next = null;
        this.print = function(){
            var str = "";
            var runner = this;
            while(runner){
                str = str + "[" + runner.val + "] -> "
                runner = runner.next;
            }
            str += "[null]"
            console.log(str);
            return this;
        }
    },

    SLL: function SLL(){
        function SLNode(val){
            if(!(this instanceof SLNode))
            { return new SLNode(val) }
            this.val = val;
            this.next = null;
            this.print = function(){
                var str = "";
                var runner = this;
                while(runner){
                    str = str + "[" + runner.val + "] -> "
                    runner = runner.next;
                }
                str += "[null]"
                console.log(str);
                return this;
            }
            this.size = function(){
                var count = 0;
                var runner = this;
                while(runner){
                    count++;
                    runner = runner.next;
                }
                return count;
            }
            this.half = function(){
                
            }
        }
        if(!(this instanceof SLL))
        { return new SLL() }
        this.head = null;
        this.swapHead = function(prevNode){
            var temp = prevNode.next;
            prevNode.next = prevNode.next.next;
            temp.next = this.head.next;
            this.head.next = prevNode.next;
            prevNode.next = this.head;
            this.head = temp;
            return this;
        }
        this.swap2Nodes = function(preNode1,preNode2){
            var node1 = preNode1.next;
            var node2 = preNode2.next;
            //if swapping adjacent nodes
            if (node1.next === node2) {
                node1.next = node1.next.next;
                node2.next = node1;
                preNode1.next = node2;
            } else {
                preNode1.next = preNode1.next.next;
                preNode2.next = preNode2.next.next;
                node1.next = preNode2.next;
                preNode2.next = node1;
                node2.next = preNode1.next;
                preNode1.next = node2;
            }
            return this;
        }
        this.valuesToSLL = function(...values){
            var start = values.length - 1;
            if(!this.head){
                this.head = SLNode(values[start])
                start--;
            }
            for(var i = start; i >= 0; i--){
                var newNode = SLNode(values[i]);
                newNode.next = this.head;
                this.head = newNode;
            }
            return this;
        }
        this.print = function(){
            var str = "head";
            var runner = this.head;
            while(runner){
                str = str + " -> [" + runner.val + "]"
                runner = runner.next;
            }
            str += " -> [null]"
            console.log(str);
            return this;
        }
    }
}
