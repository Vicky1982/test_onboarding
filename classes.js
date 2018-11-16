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
    constructor(courseId, topic, level, credit, teacher, content) {
        this.courseId = courseId;
        this.topic = topic;
        this.level = level;
        this.credit = credit;
        this.teacher = teacher;
        this.content = content;

    }

    updateCourse(body) {
        this.body = body
    }

    createHTMLList() {
        return '<li><a href="#" onclick="show('+this.courseId+')">' + this.topic + '</a></li>' //what does this do?
    }

    createHTMLDetails() {
        return '<p>Emne: ' + this.topic + '</p><p>Lærer: ' + this.teacher + '</p><p>Level: ' + this.level + '</p>';
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