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

    computeBonus(){
        switch(this.title){
            case 'CEO':
                return Math.round(Math.random() * 200);
            case 'CTO':
                return Math.round(Math.random() * 100);
            case 'DB_ADMIN':
                return Math.round(Math.random() * 500);
            case 'SYS_ADMIN':
                return Math.round(Math.random() * 600);
            case 'INTERN':
                return Math.round(Math.random() * 1000);
            default:
                return Math.round(Math.random() * 300);
        }
    }

    toString(){
        return `${super.toString()} is ${this.title} and has a salary of: ${this.salary}`;
    }
}
