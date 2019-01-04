function normalForStatement(){
    let arr = [5,6,7];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
normalForStatement();

function enhancedForStatement(){
    let arr = [5, 6, 7];
    for(let i in arr){
        console.log(arr[i]);
    }
}
enhancedForStatement();


function enhancedForStatement1(){
    let obj = {
        "name": 'Gigel',
        "surname": 'Popel'
    };
    for(let i in obj){
        console.log(obj[i]);
    }
}
enhancedForStatement1();

function enhancedForStatement2(){
    let arr = [4,5,6];
    for(let i of arr){
        console.log(i);
    }
}
enhancedForStatement2();

function enhancedForStatement3(){
    let obj = {
        name: 'Gigel',
        surname: 'Popel'
    };
    for(let i of Object.keys(obj)){
        console.log(`${i} : ${obj[i]}`);
    }

    for(let i of Object.values(obj)){
        console.log(i);
    }

}
enhancedForStatement3();

function enhancedForStatement4(){
    let arrObj = [
        {
            path: 'home',
            component: 'HomeComponent'
        },
        {
            path: 'dashboard',
            component: 'DashboardComponent'
        },
        {
            path: 'profile',
            component: 'ProfileComponent'
        }
    ];
    for(let route of arrObj){
        for(let prop of Object.keys(route)){
            console.log(`${prop} : ${route[prop]}`);
        }
    }
}

enhancedForStatement4();

function dynamicGetter(propertyName){
    let obj = {
        name: 'Gigel',
        surname: 'Popel'
    }
    console.log(obj[propertyName]);
}

dynamicGetter('name');
