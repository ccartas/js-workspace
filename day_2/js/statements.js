function max(a, b){
    if(a > b){
        console.log(`Maximum between ${a} and ${b} is: ${a}`);
    } else {
        console.log(`Maximum between ${a} and ${b} is: ${b}`);
    }
}
/*
max(5,4);
max(3, 10);
max(15, 15);
*/
function completeMax(a, b){
    if(a > b){
        console.log(`Maximum between ${a} and ${b} is: ${a}`);
    } else if(b > a){
        console.log(`Maximum between ${a} and ${b} is: ${b}`);
    } else {
        console.log(`${a} and ${b} are equals.`)
    }
}
/*
completeMax(5,4);
completeMax(3, 10);
completeMax(15, 15);
*/
var state = 0;

function reducer(action){
    console.log(`Action: ${action}`);
    console.log(`Old state: ${state}`);
    switch(action){
        case 'ADD':
            state+=1;
            break;
        case 'REMOVE':
            state-=1;
            break;
        default:
            state = state;
            break;
    }
    console.log(`New state: ${state}`);
}
/*
reducer('ADD');
reducer('ADD');
reducer('REMOVE');
reducer('ADD');
reducer('ADD');
reducer('REMOVE');
*/
function advancedReducer(action, payload){
    console.log(`Action: ${action} & Payload: ${payload}`);
    console.log(`Old state: ${state}`);
    let oldState = state;
    switch(action){
        case 'ADD':
            state = state + payload;
            break;
        case 'REMOVE':
            state = state - payload;
            break;
        default: 
            state = state;
            break;
    }
    if(oldState != state){
        console.log(`New state: ${state}`);
    } else {
        console.log(`State didn't changed: ${state}`);
    }
    
}
/*
advancedReducer('REMOVE', 0);
advancedReducer('ADD', 2);
advancedReducer('REMOVE', 8);
advancedReducer('REMOVE', 0);
advancedReducer('ADD', 10);
advancedReducer('ADD', 5);
advancedReducer('ADD', 0);
advancedReducer('REMOVE', 3);
*/
function sum(counter){
    let sum = 0;
    for(let i = 0; i < counter; i++){
        sum += i;
    }
    return `Suma numerelor pana la ${counter} este: ${sum}`;
}

console.log(sum(5));
console.log(sum(10));
console.log(sum(8));
console.log(sum(7));

function sum1(counter){
    let sum = 0;
    let i = 0;
    while(i < counter){
        if(i%2 == 0)
            sum = sum + i;
        i++;
    }
    return `Suma numerelor pare pana la ${counter} este: ${sum}`;
}

console.log(sum1(10));
console.log(sum1(5));
console.log(sum1(3));
console.log(sum1(7));

function sum2(counter){
    let sum = 0;
    let i = 0;
    do{
        if(i%2 != 0)
            sum = sum + i;
        i++;
    } while(i < counter)

    return `Suma numerelor impare pana la ${counter} este: ${sum}`;
}

console.log(sum2(10));
console.log(sum2(5));
console.log(sum2(3));
console.log(sum2(7));

