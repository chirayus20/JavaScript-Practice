function register(){
   
    console.log('Register end');
}
function sendEmail(){

    console.log('Email end');
} 

setTimeout(function login(){
    console.log('login end')
  
},3000)

function getUserData(){
    console.log('User data end');
}
function displayUserData(){
    console.log('display user data end');
}

register()
sendEmail()
login()
getUserData()
displayUserData()

console.log('Other Application work');