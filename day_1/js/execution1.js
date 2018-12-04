/*
# Step 1: Memory allocation
Call Stack: Create Global execution context
Call Stack: Allocate memory for a and b
Heap: Allocate memory for func1, func2 and func3

# Execution context of func4
    var d =17;
    console.log(d) => display 17 in the console
    Nothing else to execute
    Remove Execution context from call stack and return to EC of func3

# Execution context of func3
    var c = 17;
    func4 declaration - Pass
    func4() - Create new Execution Context
    return c; - Encountered return 
    Remove execution context and return to global e.c

# Execution context of func2
console.log('I am another function'); => Display at console
Nothing else to execute
Remove Execution context from Call Stack adn return to Global Execution COntext

# Execution context of func1
console.log('I am a simple function'); => Display at console
Nothing else to execute
Remove Execution context from Call Stack and return to Global execution context

# Global Execution Context
Parsing the file till: console.log(a) => 7
Parsing the file till: console.log(b) => 15
Parsing the file till: console.log(a+b) => 22
Parsing the file till: func1() => Create new execution context on Call Stack
Parsing the file till: func2() => Create new execution context on Call Stack
Parsing the file till: var e = func3() => Create new execution context on Call Stack
Parsing the file till: console.log(e) => Display 17 in the console
Nothing else to execute
Remove Global Execution Context from call stack
*/
var a = 7;
var b = 15;

function func1(){
    console.log('I am a simple function)');
}

function func2(){
    console.log('I am another function');
}

function func3(){
    var c = 8 + 9;
    function func4(){
        var d = 10 + 7;
        console.log(d);
    }
    func4();
    return c;
}

console.log(a);
console.log(b);
console.log(a+b);
func1();
func2();
var e = func3();
console.log(e);