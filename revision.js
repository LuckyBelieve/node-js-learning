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
 let myName = "Ineza Lucky Believe";
class Lucky extends EventEmitter{
    mynames(names){
        console.log('my names are '+names);
        this.emit('username logged in',{id:200,Name:'ineza lucky'});
    }
}

module.exports = Lucky;

const http = require('http');

  const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello '+myName);
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(myName+' you\'re welcome to courses\' page');
        res.end();
    }

    
})
server.listen('5000')

console.log('the server is listening on port 5000');

// we are going to create a class and try to listen to the event when it's raised

 const EventEmitter = require('events');

 let myNAMES = 'Lucky';

 class Revise extends EventEmitter{
    mynames(myNAMES){
           console.log('my names are '+myNAMES);
           this.emit('the username entered',{
            id:200,
            username:'lucky'
        })
    }
 }
 module.exports=Revise;
 