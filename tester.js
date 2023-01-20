const tester = require('./testing')

 const Logger = tester.Logger;
 const logger = new Logger();
 

logger.on('messagelogged',(arg) => {
    console.log('message logged successfully ',arg);
})
logger.myId('ineza Lucky Believe');



const Joker = tester.Joker;
  const joker = new Joker();
  
  joker.on('message recieved',(arg) => {
    console.log('message well received ',arg);
  })

  joker.myNames('ineza Lucky Believe');

  const myName = 'Ineza Lucky Believe';
  
const http = require('http');
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.write('Hello'+' '+myName);
        res.end();
    }
    if(req.url ==='/api/courses'){
        res.write(JSON.stringify(['happy','neza','Ineza']));
        res.end();
    }
});
server.listen(5000);

console.log('listening on port 5000...');