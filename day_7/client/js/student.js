import { Person } from './person.js';

export class Student extends Person {
    constructor(name, surname, address, courses){
        super(name, surname, address);
        this.courses = courses;
    }

    getGrades(){
        for(course of this.courses){
            console.log(`${course.courseName}: ${course.grade}`);
        }
    }

    toString(){
        return `${super.toString()} and is a student.`
    }
}