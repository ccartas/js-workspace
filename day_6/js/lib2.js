var MY_NS2 = MY_NS2 || {};

!function(){
var b = 17;
console.log(b);

MY_NS2.func1 = function(){
    console.log('I am from lib2');
}

MY_NS2.func1();
}()