/*
// activating strict mode
'use strict'; // we ativated strict mode for the entire script this has to be written before any other code to activate stricpt mode otherwise it wont work. strict mode shows errors which otherwise wouldnt be shown if the stict mode was not activated

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// it introduce a short list of variable names that are reserved for future that might be added to the language later
const interface = 'Audio'; // we will get error here bcoz javascript is reserving interface which it might use for future
const private = 534; // similarly we will get error here bcoz javascript is reserving interface which it might use for future
*/

/*
// functions
// function can receive or return the data
function logger() {  // logger will og something to the console
    console.log('My name is Jonas');
}

logger(); // it is called invoking,running or calling the function
logger();
logger();

function fruitProcessor(apples, oranges) { // parameters are variables that are specific only to this function and they will get defined when we call the function here apples, oranges are the parameters
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // (5, 0) is the value of the parameter (apples, oranges) they are called arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// Function Declaration vs Expression
// function declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthyear) { // this function is an annonymus function bcoz it doesnt have name
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
// Arrow function
// an arrow function is a special form of function expression that is shorter and therefore faster to write
// below is eg
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

// Arrow Function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
// Function calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
// Introduction to Arrays
// an Array enables storing a collection of multiple items under a single variable name
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// above is inefficient because let say we have to store 100 friends then code will become too long so we will do as shown below

const friends = ['Michel', 'Steven', 'Peter']; // we use brackets [] to create an array
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // we want to get elements out of the array then we use brackets [] let say if we want element Michel out of array then we will use [] and put 0 in there as arrays are zero based which means Michael is 0, Steven is 1, Peter is 2 and so on
console.log(friends.length); // length is a property
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // only primitive value are immutable but an array is not an immutable value so we can change it thats why Peter was change to Jay
console.log(friends);
// we cannot replace entire array for eg friends = ['Bob', 'Alice'] as this would be illegal

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; // in array we can also put other arrays inside and array eg we have put array firstName and friends inside an array jonas

console.log(jonas);
console.log(jonas.length);
*/

/*
// Basic Array Operations

// Add elements
const friends = ['Michel', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // push adds elements to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift adds element to front of the array
console.log(friends);

// Remove elements
friends.pop(); // pop removes element from the end of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // shift removes element from the front of the array
console.log(friends);

console.log(friends.indexOf('Steven')); // tells the index of given element in the array
console.log(friends.indexOf('Bob')); // here index of Bob will be -1 as its not in the array

console.log(friends.includes('Steven')); // include tells in true or false if element in the array then it returns true else it returns false
console.log(friends.includes('Bob'));
// include does not do type cohercion
// we can use include method to write conditional

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/*
// Objects

const jonasArray = [       // here we can put these values in this form also
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher''
    ['Michael', 'Peter', 'Steven']
];

const jonas = {  // here object will be written inside brackets {}
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName); // in (jonas.lastName) the dot . is an operator
console.log(jonas['lastName']);
// big difference between above two lines is that in backet notation we can put any expression we like so we dont have to explicitly write string here but instead we can compute it from some operator

const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]); // here we used bracket notation [] instead of dot notation . because we can put an expession so javascript will now replace interestedIn with actual value of the variable

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
*/

/*
//Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // any function that is attached to an object is called a method
    // calcAge: function (birthyear) { // here we specify a function as an expression
    //   return 2037 - birthyear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//console.log(jonas.calcAge(1991));  // calcAge is a function value
//console.log(jonas['calcAge'](1991));
 */

/*

// iteration the for loop

// we use loop to repeat the same, or similar, code a number of times
// for loop keeps reunning while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {// for loop is used here and rep stands for repetition which is a counter // here we put ; inside the brackets ()
    console.log(`Lifting weights repetition 1 ${rep}`);
}
*/


/*
// Looping Arrays Break and Continue
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher'
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// for (let i = 0) // we always use counter in for loop here i is used as the counter because i is a traditional counter variable name

// console.log(jonas[0])
// console.log(jonas[1])
// ... // here ... is used because we dont want to write it many time. i have written this for my own understanding it should not be used in coding
// console.log(jonas[4])

for (let i = 0; i < jonas.length; i++) { // here i = 0 because value of jonas is 0 so the loop with start from there so basically i will write the value from where the loop will begin

    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // type[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; // this is a continue statement

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; // this is a break statement

    console.log(jonas[i], typeof jonas[i]);
}
*/


/*
// Looping backwards and Loops in Loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher'
    ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ..., 4 in previous we started the loop from the front
// 4, 3, ..., 1 now we start the loop backward

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);
}

for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
}   
}

*/

/*
// WHILE Loop

// for (let rep = 1; rep <= 10; rep++) {
// console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/