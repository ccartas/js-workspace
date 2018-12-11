var MY_NS1 = MY_NS1 || {};


//IIFE Imediate invoked function expression
(function(){
setTimeout(function(){
    MY_NS1.func1();
},0);
var a = 'Some value';

MY_NS1.func1 = function(){
    console.log('I am from lib1');
}
MY_NS1.func1();
}());


//Encapsulation using block of code (block scoped variable);
{
    let a = 'Some other value';
    console.log(a);
}