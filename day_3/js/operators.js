//////////////////////////UNARY OPERATORS////////////////////////

//I found 4 operators (=, +, -, -)
// = has the lowest precendene so it's going to be executed last
// +, -, - have the same precendece level so we start to execute
// from left to right
// I evaluate 7 + 3 = 10
// I evaluate 10 - 2 = 8
// I evaluate 8 - 1 = 7;
// I evaluate var a = 7; 
var a = 7 + 3 - 2 - 1;
console.log(a);

//I found 3 operators (=, +, *)
//= has the lowest precendece so we execute the expression last
//+ has lower precendece than * so we are going to evaluate the expression second
//* has the highest precendece so we evaluate the expression first
//we evaluate from left to right 5 * 3 = 15
//we evaluate from left to right 7 + 15 = 22
//we evaluate from right to left var b = 22
var b = 7 + 5 * 3;
console.log(b);

//I found 3 operators (=, *, *);
//= has the lowest precendece so the expression will be evaluated last
//* and * have the same precendece level so we are starting to evaluate from left to right
//I evaluate expression 7 * 3 from left to right = 21
//I evaluate expression 21 * 3 from left to right = 63
//I evaluate expression var c = 63 from right to left
//I print to console value of c: 63
var c = 7 * 3 * 3;
console.log(c);

//I found 5 operators ( =, (), +, *, -)
//() - has the highest precendence so we execute it first
//I evaluate expression 7 + 3 from left to right = 10;
//* - has the second precendece level so we evaluate the expression next
//I evaluate expression 10 * 3 from left to right = 30;
// - has the third prcendece level so we evaluate the expression next
// I evaluate expression 30 - 15 from left to right = 15;
// = - has the fourth precedence level so we evaluate the expression next
// I evaluate expression var d = 15 from right to left 
// I print to console value of d: 15;
var d = (7 + 3) * 3 - 15;
console.log(d);

//I found 7 operators (=, (), +, *, /, (), +)
//I found two expressions with () operator so i start to evaluate
//from left to right
//() - has the highest precedence level so I evlaute the expression first
// I evaluate 7 + 3 from left to right = 10
//() - has the highest precendece level so I evaluate the expression second
// I evluate 2 + 2 from left to right  = 3
// * and / have the same level of precedence so I evaluate from left to right 
// * operator
// I evaluate 10 * 8 from left to right = 80
// I evaluate 80 / 4 from left to right = 20
// = has the lowest precedence level so I evaluate the expression last
// I evaluate var e = 20 from right to left
// I print to console the value of e: 20
var e = (7+3) * 8 / (2 + 2);
console.log(e);

//////////////////////////BINARY OPERATORS////////////////////////
var v1 = Boolean(0); //false
var v2 = Boolean(1); //true
var v3 = Boolean(null); //false
var v4 = Boolean(undefined); //false
var v5 = Boolean(''); //false
var v6 = Boolean('something'); //true
var v7 = Boolean(65); //true

console.log(v1); //false
console.log(v2); //true
console.log(v3); //false
console.log(v4); //false
console.log(v5); //false
console.log(v6); //true
console.log(v7); //true

function numbersOnly(keyCode){
    let asciiCode = keyCode.charCodeAt(0);
    if(asciiCode >= 48 && asciiCode <= 57){
        console.log(keyCode);
    } else {
        console.log(`Error: ${keyCode} is not numeric`);
    }
}

numbersOnly('a');
numbersOnly('7');
numbersOnly(' ');
numbersOnly('/');
numbersOnly('9');
numbersOnly('5');

function lettersOnly(keyCode){
    let asciiCode = keyCode.charCodeAt(0);
    if(asciiCode < 48 || asciiCode > 57){
        console.log(keyCode);
    } else {
        console.log(`Error: ${keyCode} is not a letter`);
    }
}

lettersOnly('a');
lettersOnly('b');
lettersOnly('7');
lettersOnly('8');
lettersOnly('3');

console.log(true || false); //true
console.log(true || true); //true
console.log(false || true); //true;
console.log(false || false); //false;

console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false
console.log(true && true); //true

function processUserDetails(name='DEFAULT_NAME', surname='DEFAULT_SURNAME'){
    /*name = name || 'YOU FORGOT TO PASS THE NAME';
    surname = surname || 'YOU FORGOT TO PASS THE SURNAME';*/
    return `Complete Name: ${name} ${surname}`;
}

console.log(processUserDetails('Gigescu', 'Popel'));
console.log(processUserDetails('Gigescu'));
console.log(processUserDetails());


////////////////COERCION (OR CONVERSION)//////////////////
//NOTE: NEVER USE == UNLESS YOU KNOW WHAT YOU ARE DOING
/* var v1 = 15;
var v2 = 15;

if(v1 == v2){
    console.log(`${v1} and ${v2} have the same values`);
} else {
    console.log(`${v1} and ${v2} have different values`);
}

var v3 = 15;
var v4 = '15';

if(v3 == v4){
    console.log(`${v3} and ${v4} have the same values`);
} else {
    console.log(`${v3} and ${v4} have different values`);
}

var v5 = undefined;
var v6 = null;
if(v5 == v6){
    console.log(`${v5} and ${v6} have the same values`);
} else {
    console.log(`${v5} and ${v6} have different values`);
}

var v7 = 1;
var v8 = true;

if (v7==v8){
    console.log(`${v7} and ${v8} have the same value`);
} else {
    console.log(`${v7} and ${v8} have different values`);
}

var v9 = 0;
var v10 = false;
if (v9==v10){
    console.log(`${v9} and ${v10} have the same value`);
} else {
    console.log(`${v9} and ${v10} have different values`);
}

var v11 = false;
var v12 = 'false';
if(v11 == v12){
    console.log(`${v11} and ${v12} have the same value`);
} else {
    console.log(`${v11} and ${v12} have different values`);
}


//NOTE: USE === IN 99.99% OF TIME;
var v1 = 15;
var v2 = '15';
if(v1 === v2){
    console.log(`${v1} and ${v2} have the same values`);
} else {
    console.log(`${v1} and ${v2} have different values`);
}

function comparator(a, b){
    if(a === b){
        console.log(`${a} and ${b} have the same values`);
    } else {
        console.log(`${a} and ${b} have different values`);
    }
}

comparator(5,5);
comparator(5,'5');
comparator(1,true);
comparator(0, false);
comparator('false', false);
comparator(true, 'true');

var a1 = 5;
var a2 = 'something';
var a3 = true;
var a4 = null;
var a5 = undefined;

//Returns the type of the variable in string format
console.log(typeof(a1));
console.log(typeof(a2));
console.log(typeof(a3));
console.log(typeof(a4));
console.log(typeof(a5));

function validator(flag){
    if(typeof(flag) !== 'undefined'){
        console.log(`Execute some important operation. Flag: ${flag}`);
    } else {
        console.log(`Error: flag is missing and it's ${typeof(flag)}`);
    }
}

validator('OK');
validator();
validator('PENDING');

function completeComparator(val1, val2){
    if(val1 === val2){
        console.log(`Type of val1: ${typeof(val1)}`);
        console.log(`Type of val2: ${typeof(val2)}`);
        console.log(`${val1} and ${val2} have the same value and the same type`);
    } else if(val1 == val2){
        console.log(`Type of val1: ${typeof(val1)}`);
        console.log(`Type of val2: ${typeof(val2)}`);
        console.log(`${val1} and ${val2} have the same value but different types`);
    } else if(typeof(val1) === typeof(val2)){
        console.log(`Type of val1: ${typeof(val1)}`);
        console.log(`Type of val2: ${typeof(val2)}`);
        console.log(`${val1} and ${val2} have different values but the same type`);
    } else {
        console.log(`Type of val1: ${typeof(val1)}`);
        console.log(`Type of val2: ${typeof(val2)}`);
        console.log(`${val1} and ${val2} have different values and different types`);
    }
}

completeComparator(10,10);
completeComparator(10, '10');
completeComparator(undefined, 'undefined');
completeComparator(1, true);
completeComparator(0, false);
completeComparator(true, 'true');
completeComparator(false, 'false');
completeComparator(undefined, null);
completeComparator(null, 'null'); */