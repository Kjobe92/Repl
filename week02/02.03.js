/*
GITHUB PAGES DEPLOYMENT - STATIC LAYOUT
************

    - open terminal and navigate to staticLayout folder.
        - if student does not have a static layout folder for their project, have them create one and move their project files into it.
        - also make sure HTML file is named 'index.html' before pushing to GitHub.
    
    Folder Structure:
        javascript<current_class>
            javascriptLibrary
                0-prework
                1-jsFundamentals
                lectureNotes
                projects <--- CREATE: in VSCode
                    staticLayout <--- CREATE: in VSCode

    - create new repository on GitHub named 'staticLayout' to push project to
*/



/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression. 
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
        
    - functions without names are known as anonymous functions
*/

// FUNCTION DECLARATION

function sayHello() {
    console.log('hi');
};

// sayHello; // won't run. Parentheses are what tells the function to run
sayHello(); // function invocation, or function call

// FUNCTION EXPRESSION

let greetings = function () { // anonymous function
    console.log('hello');
}

greetings();

/*
************
 PARAMETERS
************

    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.

    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) { // husky is the parameter
    console.log(`My dogs name is ${husky}.`);
}

myDog('Luna'); // Luna is the argument, or the value we're passing to the parameter of husky

let pet = myDog; // notice that I'm not calling, or invoking, the function of myDog. I am assigning the function of myDog to a variable named pet. I don't want the function to run, I just want to assign it to a variable. This is known as a function reference. The variable of pet is referring to the function of myDog.
pet(); // will run the function, but will give UNDEFFINED since we didn't pass in an argument.
pet('Luna');

// MULTIPLE PARAMETERS & ARGUMENTS 

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}.`);
}

allMyDogs('Mira', 'Luna', 'Charlie'); // the arguments we pass into the function call are assigned by position. First argument gets assigned to the first parameter - etc

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

// average weight challenge

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3); // Math.round() rounds the value to the nearest integer 
    return average; // can also use Math.round() here
}

let averageWeight = calculator(15, 60, 55); // since we're returning a value from the function, we need a new variable to capture the value. Then, when we invoke, or call, the calculator function - the value we return from that function is the value assigned to the averageWeight variable
console.log(`My dogs weigh an average of ${averageWeight} lbs.`);

/*
************
 ARROW FUNCTIONS
************
    - arrow functions (or fat arrow functions) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
        - that means that arrow functions do not get hoisted

    - there are two types of arrow functions - concise body and block body
        - the return happens automatically with a concise body arrow function
        - the return does not happen automatically with a block body arrow function
*/

// CONCISE BODY
// speak('Luna'); // error - does not get hoisted
let speak = (name) => console.log(`${name} goes wooooof.`);

speak('Luna');

// CONCISE BODY ARROW FUNCTION W/ RETURN
let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner('Zach', 'Maynard');
console.log(fullName);

let pawCount = (nums) => nums.reduce((accumulator, currentValue) => accumulator + currentValue); // don't need to use the return keyword since the return happens automatically
let totalPaws = pawCount([1, 1, 1, 1]);
console.log(totalPaws);

// .reduce MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

let arr = [1, 2, 3, 4];

let sum = arr.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}`);
    console.log(`current value: ${currentValue}`);
    return accumulator + currentValue;
})

console.log(sum); // undefined if we don't return since it's a block body arrow function

// BLOCK BODY
let speak = name => {
    console.log(`${name} goes wooooof.`);
}

speak('Mira');

// BLOCK BODY ARROW FUNCTION W/ RETURN

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
} 
let fullName = nameJoiner('Zach', 'Maynard');
console.log(fullName);

let pawCount = (nums) => {
    // nums.reduce((accumulator, currentValue) => accumulator + currentValue); // does not work without return
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
} // do need to use the return keyword since the return does not happen automatically
let totalPaws = pawCount([1, 1, 1, 1]);
console.log(totalPaws);