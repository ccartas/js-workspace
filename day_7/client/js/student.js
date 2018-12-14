import { Person } from './person.js';

export class Student extends Person {
    constructor(name, surname, address, courses){
        super(name, surname, address);
        this.courses = courses;
    }

    getGrades(){
        for(let course of this.courses){
            console.log(`${course.courseName}: ${course.grade}`);
        }
    }

    retakeExam(courseName, bonus){
        this.courses.forEach(course => {
            if(course.courseName === courseName){
                if(course.grade+bonus <= 10){
                    console.log(`${this.name} ${this.surname} got ${bonus} extra point at ${courseName}`);
                    course.grade+=bonus;
                } else {
                    course.grade = 10;
                    console.log(`Cannot apply ${bonus} extra points to ${courseName}`);
                }
            }
        });
    }

    toString(){
        return `${super.toString()} and is a student.`
    }
}