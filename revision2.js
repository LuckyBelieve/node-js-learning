const Lucky = require("./revision");
 
const lucky = new Lucky();

lucky.on('username logged in',(e) =>{
          console.log('you have logged in your account',e);
})
lucky.mynames('Ineza Lucky Believe');