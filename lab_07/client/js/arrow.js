function simpleFunction(){
    console.log('I am a simple function statement');
}
simpleFunction();

const simpleFunction1 = function(){
    console.log('I am a simple function expression');
}
simpleFunction1();

const simpleFunction2 = () => {
    console.log('I am a simple arrow function');
}
simpleFunction2();

const simpleFunction3 = () => console.log('I am another arrow function');
simpleFunction3();

function printer(a){
    console.log(a);
}
printer('Some value');

const printer1 = function(a){
    console.log(a);
}
printer1('Some other value');

const printer2 = (a) => console.log(a);
printer2('Hello from arrow function');

const printer3 = a => console.log(a);
printer3('Simplified arrow func with params');

function add(a, b){
    return a + b;
}
const add1 = function(a,b){
    return a+b;
}
const add2 = (a,b) => a+b;
console.log(add(5,7));
console.log(add1(5,7));
console.log(add2(5,7));

function max(a,b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}

const max1 = function(a,b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}
const max2 = (a,b) => {
    if(a>b){
        return a;
    } else {
        return b;
    }
}
const max3 = (a,b) => a>b?a:b;

console.log(max(12,10));
console.log(max1(8,9));
console.log(max2(6,4));
console.log(max3(7,5));

vehicle = {};
vehicle.make = "Audi";
vehicle.model = "RS5";
vehicle.price = 50000;
vehicle.getDetails = function(){
    return `${this.make} ${this.model} costs: ${this.price}`;
}
console.log(vehicle.getDetails());

var make = "Tesla";
var model = "Model X";
var price = 120000;

vehicle.getDetails1 = () => `${this.make} ${this.model} costs: ${this.price}`;
console.log(vehicle.getDetails1());

vehicle.color = "Red";
vehicle1 = {
    make:'BMW',
    model:'M6',
    price:60000,
    color:'Black'
};

vehicle2 = {
    make:'KIA',
    model:'Stinger',
    price:42000,
    color:'Red'
};
vehicle3 = {
    make: 'Tesla',
    model: 'Roadster',
    price: 150000,
    color: 'Red'
};
let carCollection = [
    vehicle,
    vehicle1,
    vehicle2,
    vehicle3
];

//Apply discount if the color of the car is Black
const discount = () => {
    return carCollection.filter(car => car.color === 'Black')
                    .map(car => Object.assign({},car,{
                        price: car.price - (car.price*0.2)
                    }));
}
console.log(discount());


const discount1 = () => {
    carCollection.forEach((car) =>{
        if(car.color === 'Black')
            car.price = car.price - (0.2*car.price);
    });
}
discount1();
console.log(carCollection);
//Increase the price if the color of the car is Red
const increase = () => {
    return carCollection.filter(car => car.color === 'Red')
                    .map(car => {
                        return {...car, price: car.price + (0.5*car.price)};
                    })
}
console.log(increase());
const increase1 = () => {
    carCollection.forEach((car) => {
        if(car.color === 'Red')
            car.price+=(0.5*car.price);
    })
}
increase1();
console.log(carCollection);
//Reduce the price for Tesla
const decrease = () => {
    return carCollection.filter(car => car.make === 'Tesla')
                    .map(car => {
                        return {...car, price: car.price - (0.3*car.price)};
                    })
}
console.log(decrease());
//Compute the total value of the collection
const totalValue = () => {
    return carCollection.map(car => car.price)
                    .reduce((current, price) => current +=price);
}
console.log(totalValue());
//Find the average price for a car
console.log(totalValue()/carCollection.length)

// Implement a function that takes an array of objects as argument
// and search for a specific keyword in each element key or value
// Print the result at the console.
var webCrawlerResult = [
    {
        html:'htm',
        h1: 'Welcome to STARBUCKS',
        div: 'We love etiopia coffee',
        p: 'Etiopia is better than mocha'
    }, {
        html: 'html',
        h3: 'Happy holidays from TEDs',
        p: 'We are out of coffee',
        div: 'Etiopia rocks!'
    }, {
        html: 'html',
        h5: 'Ho, Ho, Ho! Tucano Coffee',
        p: 'Fresh etiopia coffee'
    }
    ];
/*
[
    [key, value], //pair
    [key, value],
    [key, value],
    [key, value]
]
*/
const keywordFinder = (arr, keyword) => {
    arr.forEach(element => {
        Object.entries(element).map(pair => pair.map(val => val.toLowerCase()))
                    .filter(pair => pair[0].includes(keyword) || pair[1].includes(keyword))
                    .forEach(pair => {
                        console.log(`key: ${pair[0]}`);
                        console.log(`value: ${pair[1]}`);
                    });
    })
}
keywordFinder(webCrawlerResult, 'coffee');
