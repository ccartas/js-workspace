/*
    Topic: undefined value
    Undefined is a value used by the engine in order
    to tell the developer that the variable is declared
    but not initialized.
    Don't make the confusion between undefined and a 
    variable that is not defined.
*/
var a = 'Some value';

if(a == undefined){
    console.log('I am undefined');
} else {
    console.log('I am not undefined');
}

var b;

if(b == undefined){
    console.log('I am undefined');
} else {
    console.log('I am not undefined');
}

if(c == undefined){
    console.log('I am undefined');
} else {
    console.log('I am not undefined');
}