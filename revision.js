//this is about to learn about promises

let p = new Promise((resolve, reject) => {
    let myName = 'ineza';
    if(myName =='ineza'){
        resolve('this username is correct');
    }else{
        reject('this username is  incorrect');
    }
})
p.then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
})

// let's start with reminding ourselves how to raise an event and how to handle that event in the node

const EventEmitter = require('events');

class Lucky extends EventEmitter{
    mynames(names){
        console.log('my names are '+names);
        this.emit('username logged in',{id:200,Name:'ineza lucky'});
    }
}

module.exports = Lucky;