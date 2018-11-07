//we need to create classes cf. class diagram. There is a JS-file specifically for that where we need to move the classes to.

class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    validatepass (password){
        return true;
    }
}

//create array of users
var users = [];

users.push(new User("user1", "pass1"));
users.push(new User("user2", "pass2"));
users.push(new User("user3", "pass3"));
users.push(new User("user4", "pass4"));


function submit(){
    console.log('we react to user btn click')

    // Store user input
    // 1. Select html input field
    // 2. From input field, we need to store the value

    // We have two way to select html elements: by css class and by css id

    var userinputUsername = document.getElementById("uname").value;
    var userinputPassword = document.getElementById('psw').value
    //console.log(userinputUsername)
    //console.log(userinputPassword)
//if userFound is removed alert 'try again' keeps popping up
    var userFound = false
    
    //loop to check if user exists
    for(i = 0; i < users.length; i++) {

        var user = users[i];

        isValidPass = user.validatepass(userinputPassword);

        if(userinputUsername == users[i].username && userinputPassword == users[i].password) {
            //load next page if true
            window.location.href = 'index1.html' 
        //if the user is found next page loads   
            userFound = true
            //console.log('User is logged in');
        }
        //innerHTML edit "try again" if false
       
    }
    if (userFound == false) {
        alert ('try again');
    }
}




//go button - create function, match html

function go(){
    console.log('just ckeckin');
    window.location.href = 'index2.html'
}


 //if (userinputUsername == users)




//check if input matches stored user - docum








// We need to store the user input information
// Now we need to compare the input information with our existing users
    // If user exist, log him in
    // If user doesnt exist, deny access