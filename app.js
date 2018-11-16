//we need to create classes cf. class diagram. There is a JS-file specifically for that where we need to move the classes to.

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

function show(courseId) {
    var course = assignedCourses.getByCourseId(courseId);
    document.getElementById('details').innerHTML = course.teacher + course.createHTMLDetails();
}

//we need a javascript function responsible for building course page in HTML - check js & html to do lists

//create course
 

var courses = [new Course('001', 'Inside Sales for Idiots', 'beginner', '5', 'Johnny Knowitall'),
new Course('002', 'Company Introduction', 'beginner', '2', 'Sponge Bob')];
//how do I display course constructors in html?
var assignedCourses =  new AssignedCourse(courses) 


//console.log(html)

document.getElementById('courses').innerHTML = assignedCourses.createHTML();
//how do I vary between the courses and adapt correct tect to correct course? And how to add more text - where do I do that?


 







