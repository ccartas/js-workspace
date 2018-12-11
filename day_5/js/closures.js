/* function func1(){
    var tmp = 5;
    function func2(){
        console.log(tmp);
    }
    return func2;
}

function func3(){
    let values = [];
    for(let i = 0; i < 4; i++){
        values.push(function(){
            console.log(i);
        });
    }
    return values;
}
var f = func3();
f[0]();
f[1]();
f[2]();
f[3](); */

function employeeFactory(employeeType){
    switch(employeeType){
        case 'CEO':
            return function(name, surname){
                console.log(`${name} ${surname} is a great ${employeeType}. ${surname} is doing an amazing job.`);
            }
        case 'INTERN':
            return function(name, surname){
                console.log(`${name} ${surname} is very smart. ${surname} will get hired for sure.`);
            }
        case 'JANITOR':
            return function(name, surname){
                console.log(`${name} ${surname} works a lot. ${surname} will get a bonus.`);
            }
        default:
            return function(name, surname){
                console.log(`${name} ${surname} is just an employee. ${surname} is doing good.`);
            }
    }
}

var factory = employeeFactory;
var ceo = factory('CEO');
var intern = factory('INTENR');
var janitor = factory('JANITOR');
var employee = factory('EMPLOYEE');

ceo('Gigescu', 'Popel');
intern('Ana', 'Mere');
janitor('Gigel', 'Mere');
employee('John', 'Doe')

ceo('Ana', 'Pere');
intern('Turtescu', 'Fanel');
janitor('Pere', 'Popel');
employee('Jane', 'Doe');


