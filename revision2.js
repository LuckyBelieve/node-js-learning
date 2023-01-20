const Lucky = require("./revision");
 
const lucky = new Lucky();

lucky.on('username logged in',(e) =>{
          console.log('you have logged in your account',e);
})
lucky.mynames('Ineza Lucky Believe');


// let's write another promise code

const userLeft = false;
const userWatchingCatMeme = false;

function watchingtutorialpromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject('user left');
        }
        if (userWatchingCatMeme) {
            reject('user Watching Cat Meme')
        } else {
            resolve('the user is watching tutorials' )            
        }
    })
}
watchingtutorialpromise().then((message)=>{
    console.log(message);
})
