var a = 'I am a global variable';

function func1(){
    a = 'I am inside of a function';
}

function func2(){
    console.log(a);
    var a = 'Me too';
    function func3(){
        a = 'What about me?';
        console.log(a);
    }
    func3();
    console.log(a);
}

console.log(a);
func1();
func2();
console.log(a);