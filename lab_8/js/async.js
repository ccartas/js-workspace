/* setTimeout(function(){
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
} */

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


/* document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM LOADED!');
    let btn = document.getElementById('my-btn');
    console.log(btn);
    btn.addEventListener('click', () => {
    //console.log('Stop clicking me!');
        let username = 'admin';
        let password = 'P@ssw0rd';
        setTimeout(()=>{
            let result = {};
            if(username === 'admin' &&
                password === 'P@ssw0rd'){
                    console.log('User logged in successfully');
                    result = {
                        username: username,
                        password: password,
                        email: 'admin@admin.ro',
                        role: 'admin'
                    }
                } else {
                    console.log('User login failed.')
                    result = {
                        error: new Error('Login Failed')
                    }
                }
            setTimeout(() =>{
                if(result.role){
                    console.log('Redirecting user to admin panel...');
                } else {
                    console.log('Redirecting to 404 page...');
                }
            }, 1000);
        }, 1000)
    }); 
}); */

/* function login(username, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === 'admin' && password === 'P@ssw0rd'){
                console.log('User logged in successfully');
                resolve({
                    username: username,
                    password: password,
                    email: 'admin@admin.ro',
                    role: 'admin'
                });
            } else {
                reject({
                    error: new Error('Invalid credentials')
                });
            }
        },2000)
    });
}

function importantOperation(result){
    return new Promise((resolve, reject) => {
        if(result.role){
            resolve('Redirect user to admin panel');
        } else {
            reject('Not admin user. Redirect to 404...');
        }
    });
} */

/* document.addEventListener('DOMContentLoaded', ()=>{
    let btn = document.getElementById('my-btn');
    btn.addEventListener('click', () => {
        login('admin', 'P@ssw0rd').then((res) => {
            console.log(res);
            importantOperation(res).then((res) =>{
                console.log(res);
            }).catch((err) =>{
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    });
}); */

async function loginUser(username, password){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(username === 'admin' && password === 'p@ss'){
                resolve({
                    username: username,
                    password: password,
                    email: 'admin@admin.ro',
                    role: 'admin'
                });
            } else {
                reject('ERROR');
            }
        },500);
    });
}

async function importantOp(result){
    return new Promise((resolve,reject) => {
        if(result.role){
            resolve('Admin succcess! Redirect to panel.')
        } else {
            reject('Admin Failed.Redirect to 404')
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('my-btn');
    btn.addEventListener('click',async () => {
        try{
        let loggedUser = await loginUser('min', 'p@ss');
        let finalResult = await importantOp(loggedUser);
        console.log(finalResult);
        } catch (err) {
            console.log(err);
        } finally {
            console.log('Finished execution');
        }
    });
});

