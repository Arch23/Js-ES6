/*
    ===================================================//===================================================
    let and const 
        * var function scope
        * const let block scoped
*/


//ES5
console.log('ES5');
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//ES6
console.log('ES6');
const name6 = 'Jane Smith';
let age6 = 23;

//name6 = 'John Smith'; //invalid assignment to const `name6' 
age6 = 29;
console.log(name6);


//===============================================================

/* 
// ES5
console.log('ES5');
function driversLicense(passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");
}

driversLicense(true);


//ES6
console.log('ES6');
function driversLicense6(passedTest){
    
    if(passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");
    }

    //console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car."); //firstName is not defined
}

driversLicense6(true);
*/



/* 
    ===================================================//===================================================
    Blocks and IIFESs
*/

/*
//ES5
console.log('ES5');
(function(){
    var d = 1;
    var f = 3;
})();

//console.log('f '+f); //f is not defined, var are function scoped

//ES6
console.log('ES6');
{
    const a = 1;
    let b = 2;
    var c = 3;
    console.log("inside "+a + b);
    console.log("c "+c);
}

//console.log("outside "+a + b); //a is not defined, const and let are block scoped
console.log("c "+c);
*/



/* 
    ===================================================//===================================================
    Strings
        * Templates
 
*/

/* 
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(yearOfBirth){
    return  (new Date).getFullYear() - yearOfBirth;
}

//ES5
console.log('ES5');
console.log("This is "+firstName+" "+lastName+". He was born in "+yearOfBirth+". Today he is "+calcAge(yearOfBirth)+" years old.");

//ES6
console.log('ES6');
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/



/* 
    ===================================================//===================================================
    arrow functions 
    
*/

/* 
const years = [1990, 1965, 1982, 1937];

//ES5
console.log('ES5');
var ages5 = years.map(function(el){
    return (new Date).getFullYear()-el;
});
console.log(ages5);


//ES6
console.log('ES6');
let ages6 = years.map(el => (new Date).getFullYear() - el);
console.log(ages6);

ages6 = years.map((el,index) => `Age element ${index + 1}: ${(new Date).getFullYear()-el}.`);

console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return`Age element ${index + 1}: ${age}.`
});

console.log(ages6);
*/

//===============================================================

/* 
//ES5
console.log('ES5');
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
};

box5.clickMe();

//ES6
console.log('ES6');
const box6 = {
    color: 'blue',
    position: 2,
    clickMe: function(){
        document.querySelector('.blue').addEventListener('click',() => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
};

box6.clickMe();

// const box66 = {
//     color: 'blue',
//     position: 2,
//     clickMe: () => {
//         document.querySelector('.blue').addEventListener('click',() => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// };

// box66.clickMe(); //undefined because arrow functions dont bind 'this'
*/

//===============================================================

/* 
function Person(name) {
    this.name = name;
}

//ES5
console.log('ES5');
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
console.log('ES6');
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};

new Person('John').myFriends6(friends);
*/


/* 
    ===================================================//===================================================
    Destructuring 
    
*/

/* 
//ES5
console.log('ES5');
var john = ['John',26];
var name5 = john[0];
var age5 = john[1];

console.log(name5);
console.log(age5);

//ES6
console.log('ES6');
const [name6, age6] = ['John',26];

console.log(name6);
console.log(age6);

//Extra examples
console.log('Extra examples');
const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName,lastName} = obj;

console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year){
    const age = new Date().getFullYear()-year;
    return [age,65 - age];
};

const [age2,retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/


/* 
    ===================================================//===================================================
    Arrays
*/

/* 
const boxes = document.querySelectorAll('.box');

//ES5
console.log('ES5');
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});

for (var index = 0; index < boxesArr5.length; index++) {
    if(boxesArr5[index].className === 'box blue'){
        continue;
    }
    boxesArr5[index].textContent = 'I changed to blue!';
}

//ES6
console.log('ES6');

boxes.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

for(const cur of boxes){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
*/

//===============================================================

/* 
var ages = [12,17,8,21,14,11];

//ES5
console.log('ES5');
var fullAge = ages.map(function(cur){
    return cur >= 18;
});

console.log(fullAge);

console.log(fullAge.indexOf(true));

console.log(ages[fullAge.indexOf(true)]);

//ES6
console.log('ES6');
console.log(ages.findIndex(cur => cur >= 18));

console.log(ages.find(cur => cur >= 18));
*/



/* 
    ===================================================//===================================================
    Spread operator
*/

/* 
function addFourAges(a,b,c,d){
    return(a+b+c+d);
}

var sum1 = addFourAges(18,30,12,21);

console.log(sum1);

var ages = [18,30,12,21];

//Spread array to pass as parameters

//ES5
console.log('ES5');
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

//ES6
console.log('ES6');
const sum3 = addFourAges(...ages);
console.log(sum3); 
*/

//===============================================================

/* 
//Extra examples of spread usage
//Join arrays
const familySmith = ['John','Jane','Mark'];

const familyMiller = ['Mary','Bob','Ann'];

const bigFamily = [...familySmith,'Lily',...familyMiller];

console.log(bigFamily);

//join nodeLists
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h,...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); 
*/



/* 
    ===================================================//===================================================
    Rest parameters
*/

/* 
//ES5
console.log('ES5');
function isFullAge5(limit){
    console.log(arguments);
    //start to slilce the arguments after the first element
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur){
        console.log((new Date().getFullYear() - cur) >= limit);
    });
}

isFullAge5(21, 1990,1999,1965);
isFullAge5(21, 1990,1999,1965,2016,1987);

//ES6
console.log('ES6');
function isFullAge6(limit,...years){
    years.forEach(cur => console.log((new Date().getFullYear()-cur)>=limit));
}

isFullAge6(21,1990,1999,1965);
isFullAge6(21,1990,1999,1965,2016,1987); 
*/



/* 
    ===================================================//===================================================
    Default Parameters
*/

/* 
//ES5
console.log('ES5');
function SmithPerson(firstName,yearOfBirth,lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName=lastName;
    nationality === undefined ? nationality = 'american' : nationality=nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John',1990);

var emily = new SmithPerson('Emily',1983,'Diaz','spanish');

console.log(john);
console.log(emily);

//ES6
console.log('ES6');
function SmithPerson(firstName,yearOfBirth,lastName='Smith',nationality='american'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John',1990);

var emily = new SmithPerson('Emily',1983,'Diaz','spanish');

console.log(john);
console.log(emily);  
*/



/* 
    ===================================================//===================================================
    MAPS
*/

/* 
const question = new Map();
question.set('question','What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true,'Correct answer!');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));

for( let [key,value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans===question.get('correct')));

console.log(question.size);

question.forEach((value,key) => console.log(`This is ${key}, and it's set to ${value}`));

if(question.has(4)){
    question.delete(4);
    console.log('Answer 4 was here');
}

question.clear(); 
*/



/* 
    ===================================================//===================================================
    Classes
*/

/* 
//ES5
console.log('ES5');
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John',1990,'teacher');
console.log(john5);

//ES6
console.log('ES5');
class Person6 {
    constructor (name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }
}

const john6 = new Person6('John',1990,'teacher');
console.log(john6);

Person6.greeting();
*/



/*
    ===================================================//===================================================
    Inheritance
*/

/* 
//ES5
console.log('ES5');
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name,yearOfBirth,job,olympicGames,medals){
    Person5.call(this,name,yearOfBirth,job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John',1990,'swimmer',3,10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6
console.log('ES6');
class Person6 {
    constructor (name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }
}

class Athlete6 extends Person6{
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3,10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/