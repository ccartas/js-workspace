/*
    Hoising mechanism
    Syntax parser analyze the file and allocate memory
    for functions and primitives.
    If the primitive is used before initialization
    the printed value is undefined
*/
console.log(a);
func1();
var a = 'Something';

function func1(){
    console.log('Another function!');
}


