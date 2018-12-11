/*
var obj = new Object(); // called constructor of Object
console.log(obj);
var obj1 = Object.create(Object()); //created an object based on constructor of Object()
console.log(obj1);
var obj2 = Object.assign({},obj); //Creates a new object. The first parameter is the destination and second one is the source
console.log(obj2);
var obj3 = {...obj2}; //Copies the obj2 into a new object.
console.log(obj3);
*/

var person = {}; //Object literals  <=> new Object();
person.name = 'Gigescu';
person.surname = 'Popel';
person.age = 25;
//computed property names.
//In Javascript Objects are actually collections of (key: value) pairs.
person['address'] = 'Calea Victoriei Nr.67';
person['country'] = 'Romania';
//console.log(person);

person.propertyGetter = function(property){
    return `${property} : ${this[property] || `${property} does not exist`}`;
}

person.getDetails = function(){
    return `${this.name} ${this.surname} has ${this.age} years old, is born in ${this.country} and lives on ${this.address}`;
}

console.log(person.propertyGetter('name'));
console.log(person.propertyGetter('surname'));
console.log(person.propertyGetter('telephone'));
console.log(person.propertyGetter('city'));
console.log(person.getDetails());

//I can add new property or methods at runtime to an object
var person1 = {
    name: 'Popescu',
    surname: 'Gigel',
    age: 33,
    country: 'Romania',
    address: 'Calea Dorobanti Nr. 57'
}
console.log(person1);
person1.telephone = "+47342132123";
console.log(person1);

function objectParser(obj){
    for(key of Object.keys(obj)){
        console.log(`${key} : ${obj[key]}`);
    }
}
objectParser(person);
console.log('Calling object parser again...');
objectParser(person1);

function objectParser1(obj){
    for(value of Object.values(obj)){
        console.log(`${value}`);
    }
}
objectParser1(person);
console.log('Calling object parser again...');
objectParser1(person1);

function objectParser2(obj){
    for(entry of Object.entries(obj)){
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}
objectParser2(person);
console.log('Calling object parser again...');
objectParser2(person1);

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

function etiopiaSearch(arr){
    arr.forEach(function(page){
        Object.values(page).map(function(tag){
            return tag.toLowerCase();
        }).filter(function(tag){
            return tag.includes('etiopia');
        }).forEach(function(res){
            console.log(res);
        });
    });
}
etiopiaSearch(webCrawlerResult);

// Implement a function that takes an array of objects as argument
// and search for a specific keyword in each element key or value
// Print the result at the console.

/*
{
        html:'htm',
        h1: 'Welcome to STARBUCKS',
        div: 'We love etiopia coffee',
        p: 'Etiopia is better than mocha'
    }
*/
function genericSearch(arr, keyword){
    //iterate over each element of arr
    arr.forEach(function(element){
        //Object.entries returns an array of arrays with 2 elements(key, value)
        //For each array of two elements(key, value) apply map 
        Object.entries(element).map(function(pair){

            return pair.map(function(item){
                return item.toLowerCase();
            });
        }).filter(function(pair){
            return pair[0].includes(keyword) || pair[1].includes(keyword);
        }).forEach(function(pair){
            if(pair[0].includes(keyword)){
                console.log(pair[0]);
            }
            if(pair[1].includes(keyword)){
                console.log(pair[1]);
            }
        });
    })
}

genericSearch(webCrawlerResult, 'html');


///////Inheritance////

var pers = {};
pers.name = 'Gigi';
pers.surname = 'Popescu';
pers['address'] = 'Bulevardul Aviatorilor Nr.1';
pers.getDetails = function(){
    return `${this.name} ${this.surname} lives on ${this.address}`;
}

console.log(pers.getDetails());
var student = Object.create(pers);
student.age = 23;
student.learn = function(){
    console.log(`${this.name} ${this.surname} is learning`);
}
student.learn();

var employee = Object.create(student);
employee.title = 'System Admin';
employee.salary = '10000 EUR';
employee.work = function(){
    console.log(`${this.name} ${this.surname} is working as a ${this.title} and earns ${this.salary} monthly`);
}
employee.work();

console.log(pers);
console.log(student);
console.log(employee);
