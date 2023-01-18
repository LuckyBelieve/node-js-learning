// function myAge(age){
    // console.log('i\'m '+age+' years old.');
// }

// var mynames = 'Ineza Lucky Believe';



// let us export our method using exports

// module.exports.myNames = myNames;
// module.exports.myAge = myAge;

const EventEmitter = require('events');

class Logger extends EventEmitter {
    myNames(names){
    console.log('Hello there '+names);
    this.emit('logging',{data:'hello lucky'})
    
}
}

module.exports = Logger;