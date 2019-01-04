var a = 'I am a global variable';
b = 'I am also global';

function func1(){
    c = 'What am I?';
    var a = 'Something else';
    function func2(){
        a = 'Some value';
    }
    func2();
    console.log(a);
}

function func2(){
    if(5 > 4){
        var a = 'Some other value';
        console.log(a);
    }
    console.log(a);
}

//Block scoped variable
function func3(){
    if(5>4){
        let a = 'Some other value';
        console.log(a);
    }
    console.log(a);
}

function func4(){
    var arr = [];
    for(var i = 0;i<3;i++){
        arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}

function func5(){
    var arr = [];
    for(let i = 0;i<3;i++){
        arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}

{
    let a = "Something else";
}
console.log(a);

//func1();
func2();
func3();
var values = func4();
values[0]();
values[1]();
values[2]();
var newValues = func5();
newValues[0]();
newValues[1]();
newValues[2]();
//console.log(a);
//console.log(b);

const d = 'I am a constant';
console.log(d);
//cannot modify constant variable after initialization
//d='Another one';