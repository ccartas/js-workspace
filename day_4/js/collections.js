/* var array = new Array();
var array1 = []; //Array Literals
console.log(array);
console.log(array1);

var array2 = new Array('first', 'second', 'third', 'fourth');
var array3 = ['first', 'second', 'third', 'fourth'];
console.log(array2);
console.log(array3);

var array4 = [];
array4.push('some value');
array4.push(4);
array4.push(true);
array4.push(false);
array4.push('');
array4.push(undefined);
array4.push(null);
console.log(array4);


//removes the last element from the array
array4.pop();
console.log(array4);


var callStack = [];
var eventQueue = [];

callStack.addExecutionContext = function(execContext){
    this.push(execContext);
    console.log(`Added Execution Context of ${execContext} to Call Stack`);
}

callStack.removeExecutionContext = function(){
    let removedElement = this.pop();
    console.log(`Popped ${removedElement} from stack`);
}

callStack.displayElements = function(){
    for(let value of this){
        console.log(value);
    }
}

callStack.addExecutionContext('function1');
callStack.addExecutionContext('function2');
callStack.addExecutionContext('function3');
callStack.addExecutionContext('function4');
callStack.addExecutionContext('function5');
callStack.removeExecutionContext();
callStack.removeExecutionContext();
callStack.displayElements();

eventQueue.addEvent = function(event){
    this.push(event);
    console.log(`Added ${event} to Event Queue`);
}

eventQueue.removeEvent = function(){
    let removedElement = this.splice(0, 1);
    console.log(`Removed ${removedElement} from Event Queue`);
}

eventQueue.parseElements = function(){
    for(let i = 0; i < this.length; i++){
        console.log(this[i]);
    }
}

eventQueue.addEvent('click');
eventQueue.addEvent('mouseover');
eventQueue.addEvent('click');
eventQueue.addEvent('focus');
eventQueue.addEvent('blur');
eventQueue.addEvent('click');
eventQueue.addEvent('keydown');
eventQueue.addEvent('click');
eventQueue.removeEvent();
eventQueue.removeEvent();
eventQueue.removeEvent();
eventQueue.parseElements();


var cityName = "Brasov Cluj Covasna Sibiu Timisoara";
console.log(cityName);
var ecoArray = cityName.split(" ");

for(let index in ecoArray){
    console.log(`Eco City ${index}: ${ecoArray[index]}`);
}

var hello = "         hello people       ";

console.log(ecoArray.join(","));
console.log(cityName.includes("Brasov"));
console.log(cityName.includes('ov', 2));
console.log(cityName.startsWith('Bra'));
console.log(cityName.startsWith('sov',3));
console.log(cityName.endsWith('Timisoara'));
console.log(hello.endsWith('hell', 4));
console.log(hello);
console.log(hello.trim()); // removes spaces before and after the string content
console.log(hello.indexOf('p'));
console.log(hello.replace(/p/g, 'm')); */

//////////////////////////////////////ES 6 COLLECTIONS/////////////////////

/* var map = new Map();
map.set('name', 'Gigescu');
map.set('surname', 'Popescu');
map.set('age', 25);
map.set('telephone', '+30921831908');
map.set('email', 'gigi@pop.ro');

for(let i of map.keys()){
    console.log(`${i}: ${map.get(i)}`);
}

for(let value of map.values()){
    console.log(`${value}`);
}

for(let pair of map.entries()){
    console.log(`${pair[0]} : ${pair[1]}`);
}

var set = new Set();
set.add('click');
set.add('click');
set.add('click');
set.add('mouseover');
set.add('focus');

for(let i of set.keys()){
    console.log(i);
}

for(let i of set.values()){
    console.log(i);
}
for(let pair of set.entries()){
    console.log(pair);
} */


////////////////////////////SHALLOW COPY VS DEEP COPY ///////////////

var firstArray = [];

firstArray.push('first');
firstArray.push('second');
firstArray.push('third');
firstArray.push('fourth');
firstArray.push('fifth');


//secondArray stores a copy (shallow) of firstArray but it points to 
//the same memory area
//Any modification that we make to firstArray and secondArray
// it's reflected to both collections

/* var secondArray = firstArray;
secondArray[0] = 5000;
secondArray[4] = 3000;
firstArray[0] = 'something';
console.log(secondArray);
console.log(firstArray);
 */


/* //created deep copy mechanism for secondArray
var secondArray = []; //new Array() =>// We allocate memory for secondArray
for(let i = 0;i < firstArray.length; i++){
    secondArray.push(firstArray[i]);
}
secondArray[0] = 5000;
secondArray[4] = 3000;
firstArray[0] = 'something';
console.log(firstArray);
console.log(secondArray); */

/* var secondArray = [];
for(let value of firstArray){
    secondArray.push(value);
}
secondArray[0] = 5000;
secondArray[4] = 3000;
firstArray[0] = 'something';
console.log(firstArray);
console.log(secondArray);
 */

/* var secondArray = Object.assign([], firstArray);
secondArray[0] = 5000;
secondArray[4] = 3000;
firstArray[0] = 'something';
console.log(firstArray);
console.log(secondArray); */

/* //ES6 approach using spread operator(...)
var secondArray = [...firstArray];
secondArray[0] = 5000;
secondArray[4] = 3000;
firstArray[0] = 'something';
console.log(firstArray);
console.log(secondArray); */

//////////////////////////////////ARRAY OPERATIONS///////////////////////
/*
    map - return new collection
    filter - return new collection
    reduce - returns a number
    forEach - modifies the initial collection
*/

var employees = [
    {
        'name': 'Gigescu',
        'surname': 'Popescu',
        'salary': 1500
    },
    {
        'name': 'Ana',
        'surname': 'Mere',
        'salary': 3000
    },
    {
        'name': 'Ana',
        'surname': 'Pere',
        'salary': 2500
    },
    {
        'name': 'Manole',
        'surname': 'Popescu',
        'salary': 2000
    },{
        'name': 'Andrei',
        'surname': 'Popescu',
        'salary': 4500
    }
];

console.log(employees.slice(0, 2));

/* function applyChristmasBonus(value){
    for(let employee of employees){
        employee.salary+=value;
    }
}

applyChristmasBonus(500); */

function applyChristmasBonus(value){
    return employees.map(function(element){
        return {...element, salary: element.salary + value};
    })
}

console.log(employees);
console.log(applyChristmasBonus(500));

function applyChristmasBonus1(value){
    return employees.filter(function(employee){
        return employee.salary <= 2000 ? true : false;
    }).map(function(element){
        return {...element, salary: element.salary + value};
    });
}
console.log(applyChristmasBonus1(1000));

function getTotalSalaries(){
    return employees.map(function(element){
        return element.salary;
    }).reduce(function(max, currentValue){
        if(max < currentValue){
            return currentValue;
        } else {
            return max;
        }
    });
}

console.log(getTotalSalaries());

function applyChristmasBonus2(value){
    employees.forEach(function(element){
        element.salary += value
    });
}
applyChristmasBonus2(1000);
console.log(employees);
