/* 
///////////////////////////////Store reference to function in a variable////////////////////
function simpleFunction(){
    var value = 25;
    console.log(value);
}

var func = simpleFunction; //func is a reference to simpleFunction
console.log(typeof func); //we have function type
func();
func();

function simpleFunction1(){
    var value = 15;
    return value;
} */

/*
Evaluating expression func1 = simpleFunction1() from right to left
First operand to be evaluated: simpleFunction1() return 15
initiliaze func1 with value 15 
*/
/* var func1 = simpleFunction1();
console.log(typeof func1); // we have type number
//func1(); //error func1 is not a function

function simpleFunction2(param){
    var value = 25;
    console.log(value + param);
}
var func2 = simpleFunction2;
func2(5);
func2(10);
func2(15);

function simpleFunction3(param){
    var value = 15;
    return value + param;
}
var func3 = simpleFunction3(5);
console.log(typeof func3); //func3 is a number so we cannot use () operator
func3 = simpleFunction3
console.log(typeof func3); //func3 is a function now so we can use () operator to call it
console.log(func3(5));
console.log(func3(10));
console.log(func3(15));
console.log(func3.name); //display simpleFunction3
 */

/* ///////////////////////Use functions as collection elements/////////////////////////
function generator(){
    let values = []; // Array literals to initialize the array
    function importantOperation(){
        console.log('Executing important operation');
    }
    for(let i = 0; i < 4; i++){
        values.push(importantOperation);
    }
    return values;
}
var gen = generator();
gen[0]();
console.log(gen[0].name);
gen[1]();
console.log(gen[1].name);
gen[2]();
console.log(gen[2].name);
gen[3]();
console.log(gen[3].name);

var gen1 = generator;
console.log(gen1.name);
console.log(gen1()[1].name); */
/*
Evaluate gen1()[1]();
I evaluate from left to right gen1() => returns
an array of elements and each element is a reference
to importantOperation.
I evaluate gen1()[1] => I access the element from index 1
That means I acess second element which is importantOperation
I evaluate gen1()[1]() =>call importantOperation
Display Executing important operation in the console
*/
/* gen1()[1](); //Prints Executing Important operation */


/* /////////////////////// INNER FUNCTIONS //////////////////
function parent(){
    console.log('Started executing parent function');
    function inner(){
        console.log('I am an inner function');
    }
    inner();
    console.log('Finished execution of parent function');
}
var p = parent; //store reference of parent in variable p
console.log(typeof p); //function
console.log(p.name); //parent
p(); */

/* /////////////////////FUNCTIONS RETURNING FUNCTIONS///////////////////////
function factory(flag){
    console.log('Started execution of factory');
    function operation(){
        console.log(`Execution operation: ${flag}`);
    }
    console.log('Finished execution of factory');
    return operation;
}
var ops = factory('STARTED');
ops()
ops()

function factory1(flag){
    console.log('Started execution of factory1');
    function operation(type){
        console.log(`Executing ${type}: ${flag}`);
    }
    console.log('Finished execution of factory1');
    return operation;
}

var ops1 = factory1('PENDING');
ops1('REQUEST');
ops1('RESPONSE');
*/

////////////////////////////PASSING FUNCTIONS AS PARAMETERS TO OTHER FUNCTIONS///////////////
function decorator(func){
    console.log(`Started execution of ${func.name}`);
    func();
    console.log(`Execution of ${func.name} finished.`)
}
function add(){
    console.log(5+7);
}
function substract(){
    console.log(12-2);
}

var dec = decorator;
dec(add);
dec(substract);

function decorator1(func){
    function enhancedFunction(){
        func();
        console.log(`I am a better ${func.name}`);
    }
    return enhancedFunction;
}
var dec1 = decorator1;
var enh1 = dec1(add);
var enh2 = dec1(substract);
enh1();
enh2();

function add1(x,y){
    return x+y;
}

function substract1(x,y){
    return x-y;
}

function decorator2(func){
    function wrapper(x,y){
        console.log(`I am a better ${func.name}`);
        console.log(func(x,y));
    }
    return wrapper;
}

var dec2 = decorator2;
var enh3 = dec2(add1);
var enh4 = dec2(substract1);
enh3(3,4);
enh4(5,2);


function peterParker(){
    human = {};
    human.name = "Parker";
    human.surname = "Peter";
    human.skills = [
        'English',
        'Cooking',
        'Math'
    ];
    return human;
}

//Decorator design pattern
function spiderBite(subject){
    function spiderMan(){
        console.log(`Radioactive spider coming close to ${subject.name}`);
        human = subject();
        console.log(`The spider bites ${human.surname}`);
        human.skills.push('Jumping from buildings');
        human.skills.push('Climbing Walls');
        human.skills.push('Throwing spider web');
        human.skills.push('Spider instinct');
        human.alias = 'Spider Man';
        return human;
    }
    return spiderMan;
}

var mutation = spiderBite; //save reference to spiderBite in mutation variable
var hero = mutation(peterParker); 
console.log(hero());


function wrapper(func){
    console.log('Started execution of wrapper');
    function wrapper1(){
        console.log(`Started execution of ${func.name}`);
        func();
        console.log(`Finished execution of ${func.name}`);
    }
    func();
    wrapper1();
    return wrapper1;
}
function importantOp(){
    console.log('Executing an important operation');
}
var wrap = wrapper(importantOp);
wrap();