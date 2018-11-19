class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }


   /* changeUsername(newUsername) {
        this.username = newUsername 
    } */

    validatepass (password){
        return true;
    }
}

class Course {
    constructor(courseId, topic, level, credit, teacher, title, body) {
        this.courseId = courseId;
        this.topic = topic;
        this.level = level;
        this.credit = credit;
        this.teacher = teacher;
        this.title = title;
        this.body = body

    }

    updateCourse(body) {
        this.body = body
    }
//link that opens course content
    createHTMLList() {
        return '<li><a href="#" onclick="show('+this.courseId+')">' + this.topic + '</a></li>' 
    }
//course content
    createHTMLDetails() {
        return '<p>Topic: ' + this.topic + '</p><p>Teacher: ' + this.teacher + 
        '</p><p>Level: ' + this.level + '</p><p>content: <h1>' + this.title + 
        '</h1> ' + this.body + '</p>' + '<button id='+this.id+' onclick="goToQuiz('+this.courseId+')">Go To Quiz</button>';
    }
}



class AssignedCourse {
    constructor(courses) {
        this.courses = courses;
    }

    assignCourse(course) {
        this.courses.push(course);
    }

    getByCourseId(courseId) {
        for(var i=0; i<this.courses.length; i++) {
            if (this.courses[i].courseId == courseId) {
                return this.courses[i];
            }
        }
        return null;
    }

    createHTML() {
        var html = ''
        for (var i=0; i < courses.length; i++) {
            html += courses[i].createHTMLList()
        } 
        return '<ul>' + html + '</ul>'
    }
}

/*let newUser1 = new User('abc123', 'xxx')
let newUser2 = new User('abc', 'mm')

newUser1.changeUsername('dolphin3')
newUser2.changeUsername('elephant')

let name = 'me'

name.changeUsername()*/


