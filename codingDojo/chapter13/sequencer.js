var priQueue = require("./priorityQueue.js")

function sequencer(){
    this.messages = priQueue();
    this.sequenceMessage = function(arr){
        this.messages.enqueue(arr[1],arr[0]);
        return this;
    }
    this.playMessages = function(){
        var time = Date.now();
        if(this.messages.head.pri > time){
            console.log("There are no messages to play.")
            return;
        } else {
            while(this.messages.head.pri <= time){
                console.log(this.messages.dequeue().val);
            }
            return;
        }
    }
}

var mySequencer = new sequencer();

//approx. current time: 1499815008198

mySequencer.sequenceMessage([2000000000000,"Msg 4"]);
mySequencer.sequenceMessage([1453506544890,"Msg 2"]);
mySequencer.sequenceMessage([1453506544900,"Msg 3"]);
mySequencer.sequenceMessage([0000000000000,"Msg 1"]);

mySequencer.playMessages()
