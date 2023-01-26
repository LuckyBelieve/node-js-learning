// const Lucky = require("./revision");
 
// const lucky = new Lucky();

// lucky.on('username logged in',(e) =>{
//           console.log('you have logged in your account',e);
// })
// lucky.mynames('Ineza Lucky Believe');


// // let's write another promise code

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchingtutorialpromise(){
//     return new Promise((resolve, reject) => {
//         if(userLeft){
//             reject('user left');
//         }
//         if (userWatchingCatMeme) {
//             reject('user Watching Cat Meme')
//         } else {
//             resolve('the user is watching tutorials' )            
//         }
//     })
// }
// watchingtutorialpromise().then((message)=>{
//     console.log(message);
// })

const Revise = require('./revision');

let revise = new Revise();

revise.on('the username entered',(arg)=>{
    console.log('the username matches successfully ',arg);
})
revise.mynames('lucky');

// we are okay with events let's move to the promises

let lucky = 15+' years old';
let happy = 14+' years old';

let p = new Promise((resolve, reject) => {
    if(lucky == 15+'years old'){
        resolve('he is still young');
    }
    if(happy == 14+'years old'){       
    resolve('she is still young');
    }else{   
    reject('you\'re not allowed to come to games');
    }
}).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

// creating web server

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'content-Type':'text'});
        res.write('this is the home page');
        res.end();
    }else if(req.url == '/students'){
        res.writeHead(200,{'Content-Type':'text'});
        res.write('this is the students page');
        res.end();
    }else{
        res.write('invalid request');
    }
}).listen(5000);

console.log('server is learning on port 5000');
