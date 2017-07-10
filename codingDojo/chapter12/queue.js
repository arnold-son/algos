module.exports = function Queue(){
    function SLNode(val){
        this.val = val;
        this.next = null;
    }
    this.head = null;
    tail = null;
    this.enqueue = function(val){
        if(this.head === null){
            this.head = new SLNode(val);
            tail = this.head;
        } else {
            tail.next = new SLNode(val);
            tail = tail.next;
        }
        return this;
    }
    this.dequeue = function(){
        if(this.head === null){
            return null;
        } else {
            if(this.head === tail){
                tail = null;
            }
            var temp = this.head;
            this.head = this.head.next;
            return temp;
        }
    }
    this.front = function(){
        return this.head;
    }
}
