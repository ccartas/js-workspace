/* var student = {
    name: 'John',
    surname: 'Doe',
    address: 'Calea victoriei'
}

var car = {
    make: 'Audi',
    model: 'A5'
}
console.log(student);
console.log(car); */
/* function Person1(name, surname, address){
    this.name = name;
    this.surname = surname;
    this.address = address;
}
Person1.prototype.doSomething = function(){
    console.log('I am doing nothing');
}

person1 = new Person1('Gigel', 'Popel', 'Calea Dorobanti Nr.65');
person = new Person('Gigi', 'Popescu', 'Calea Grivitei Nr.54');
console.log(person1.doSomething());
console.log(student instanceof Object);
console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(person.toString()); */

import { Person } from './person.js';
import { Employee } from './employee.js';
import { Course } from './course.js';
import { Student } from './student.js';

let person = new Person();
person.name = 'Gigi';
person.surname = 'Popescu';
person.address = 'Bulevardul Unirii Nr.30';
console.log(person.toString());

let emp = new Employee('Popescu',
            'Gigel',
            'Calea Victoriei Nr.3',
            'CEO',
            10000);
let emp1 = new Employee('Ana',
                'Mere',
                'Calea Grivitei Nr.33',
                'CTO',
                15000);
let emp2 = new Employee('Pere',
                        'Ana',
                        'Calea Dorobanti Nr.44',
                        'INTERN',
                        4000);
let emp3 = new Employee('Gigi',
                    'Popescu',
                    'Soseaua Pantelimon Nr.33',
                    'SYS_ADMIN',
                    8000);
let emp4 = new Employee('Ana',
                        'Popescu',
                        'Bd. Aviatorilor Nr.2',
                        'DB_ADMIN',
                        9000);
                        
emp.applySalaryRaise();
emp1.applySalaryRaise();
emp2.applySalaryRaise();
emp3.applySalaryRaise();
emp4.applySalaryRaise();

let employees = [
    emp,
    emp1,
    emp2,
    emp3,
    emp4
];

employees.checkForBonuses = () => {
    return employees.map(employee => {
        return {
            employeeName: `${employee.name} ${employee.surname}`,
            title: employee.title,
            salary: employee.salary,
            bonus: employee.computeBonus()
        }
    });
}
//console.log(employees.checkForBonuses());

employees.christmasCosts = () => {
    return employees.map(employee => Object.assign({},{
        employeeName: `${employee.name} ${employee.surname}`,
        title: employee.title,
        salary: employee.salary,
        bonus: employee.computeBonus()
    })).map(employee => Object.assign({}, {
       employeeName: `${employee.name} ${employee.surname}`,
       title: employee.title,
       christmasSalary: employee.salary + employee.bonus
    })).map(employee => employee.christmasSalary)
      .filter(christmasSalary => christmasSalary > 9500)
      .reduce((totalCosts, salary) => totalCosts+=salary);
}

console.log(employees.christmasCosts());



