function sayHello(name){
    // console.log('Hello '+name);
}
// sayHello('Lucky');

// console.log(module);
//we use require function refering to the module which we want to import its variables
//simply we use that function to load a module



// console.log(logger);

//when we have done this we can easily access the function that were exported from the logger module

// logger.myNames('Ineza Lucky Believe');


// loading the built in modules

// path module that help to get the further information about our module here

const path = require('path');

var pathObj = path.parse('__filename');

// console.log(pathObj);

// the os built in module that allows us to get the information about the os of our computer 

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(`total memory: ${totalMemory} and the free space : ${freeMemory}`);

// file system module
//let's load our fs module

const fs = require('fs');

// using synchronous method

 var directory = fs.readdirSync('./');
 console.log(directory);

//  using asynchronous method

 var otherDirectory = fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Results',files);
 })


//  let's procceed with event emitters and listeners also known as Callback

// listener is a function that is called when an event is raised so as the callbacks

//let's load the EventEmitter class and make an instance from it

const EventEmitter = require('events');

const emitter = new EventEmitter();

// adding a listener or a callback function that will be called when the event is raised 

emitter.on('messagelogged',function(){
    console.log('lucky logged in his account');
})

emitter.emit('messagelogged');

// raiding another event and its listener



// raising an event with event arguement

// emitter.emit('logging',{data:"message"});


// using effective way to raise Events

const Logger = require('./logger');
  const logger = new Logger();

 logger.on('logging',(e) => {
    console.log('the message is logged with ',e);
})

logger.myNames('ineza Lucky Believe');

const names = 'lucky Believe';

const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url ==='/'){
        res.write('you\'re welcome '+names);
        res.end();
    }
    if(req.url === '/api/login'){
        res.write('welcome to our login page');
        res.end();
    }
})

server.listen(4000);

console.log('listening on port 4000....');
