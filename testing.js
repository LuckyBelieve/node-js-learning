const EventEmitter = require('events');

class Logger extends EventEmitter{
    myId(names){
        console.log('my names are '+names);
        this.emit('messagelogged',{id:23,url:'http://'})
    }
}

module.exports.Logger = Logger;

class Joker extends EventEmitter{
    myNames(names){
        console.log('my names are '+names);
        this.emit('message recieved',{id:20,location:320});
    }
}
module.exports.Joker = Joker;