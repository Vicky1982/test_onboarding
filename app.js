//create array of users
var users = [];

users.push(new User("user1", "pass1"));
users.push(new User("user2", "pass2"));
users.push(new User("user3", "pass3"));
users.push(new User("user4", "pass4"));

//button
function submit() {
    //console.log('we react to user btn click')

    // Store user input
    // 1. Select html input field
    // 2. From input field, we need to store the value

    // We have two way to select html elements: by css class and by css id

    var userinputUsername = document.getElementById("uname").value;
    var userinputPassword = document.getElementById('psw').value;
    //console.log(userinputUsername)
    //console.log(userinputPassword)
    //if userFound is removed alert 'try again' keeps popping up
    var userFound = false

    //loop to check if user exists
    for (i = 0; i < users.length; i++) {

        var user = users[i];

        isValidPass = user.validatepass(userinputPassword);

        if (userinputUsername == users[i].username && userinputPassword == users[i].password) {
            //load next page if true
            window.location.href = 'index1.html'
            //if the user is found next page loads   
            userFound = true
            //console.log('User is logged in');
        }
    }
    if (userFound == false) {
        alert('try again');
    }
}

//shows course details in html

function show(courseId) {
    var course = assignedCourses.getByCourseId(courseId);
    document.getElementById('details').innerHTML = course.createHTMLDetails();
}


//create course

var courses = [new Course('001', 'Inside Sales for Idiots', 'beginner', '5', 'Johnny Knowitall'),
new Course('002', 'Company Introduction', 'beginner', '2', 'Sponge Bob'),
new Course('003', 'Company Introduction 2', 'intermediate', '2', 'Sponge Bob', 
'Let\'s get started on Course 1', 
'Your about to become even more brainy. Course 1 will teach you everything ' +  
'you need to know about awesome stuff such as: Talking to people Becoming successful Hacking life')]
//how can I write a very long string in multiple lines? ''+''
//how can I add course content in a simpler way?
//how do I display course constructors in html?
var assignedCourses = new AssignedCourse(courses)


//console.log(html)

document.getElementById('courses').innerHTML = assignedCourses.createHTML();

function goToQuiz(id) {
    
    localStorage.setItem('activeCourse', id)
    window.location.href = 'index2.html'
};

