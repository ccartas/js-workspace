setTimeout(function(){
    console.log('I should be executed after 1000 ms')
}, 1000);
setTimeout(function(){
    console.log('I should be executed after 0 ms');
}, 0);
function func1(){
    console.log('I am the first in the Call Stack');
}
function func2(){
    console.log('I am the second in the Call Stack');
}
function func3(){
    console.log('I am the third in the Call Stack');
}
function func4(){
    console.log('I am the fourth in the Call Stack');
}

func1();
func2();
func3();
func4();

function doSomething(){
    console.log('Stop clicking me!');
}

/* window.addEventListener('load', ()=>{
    console.log('ENTIRE PAGE LOADED');
    let btn = document.getElementsByTagName('button')[0];
    console.log(btn);
    btn.addEventListener('click', () => {
    console.log('Stop clicking me!');
    }); 
});

setTimeout(() => {
    console.log('1000 ms passed');
    let btn = document.getElementsByTagName('button')[0];
    console.log(btn);
    btn.addEventListener('click', () => {
    console.log('Stop clicking me!');
    });
}, 1000); */


document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM LOADED!');
    let btn = document.getElementById('my-btn');
    console.log(btn);
    btn.addEventListener('click', () => {
    console.log('Stop clicking me!');
    }); 
});

