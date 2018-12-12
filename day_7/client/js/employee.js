import { Person } from './person.js';

export class Employee extends Person {
    constructor(name, surname, address, title, salary){
        super(name, surname, address);
        this.title = title;
        this.salary = salary;
    }

    applySalaryRaise(){
        this.salary+=(this.salary*0.2);
    }

    toString(){
        return `${super.toString()} is ${this.title} and has a salary of: ${this.salary}`;
    }
}
