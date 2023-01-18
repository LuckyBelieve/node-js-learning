const EventEmitter = require('events');

class Logger extends EventEmitter{
    myId(names){
        console.log('my names are '+names);
        this.emit('messagelogged',{id:23,url:'http://'})
    }
}

module.exports = Logger;