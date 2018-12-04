var a = 'Something';

function func1(){
    var c = 5 + 7;
    console.log(c);
}

function func2(){
    var d = 5 + 7;
    return d;
}

function func3(){
    console.log('I am inside func3');
    function func4(){
        console.log('I am another function');
    }
    func4();
}

console.log(a);
func1();
var b = func2();
console.log(b);
func3();