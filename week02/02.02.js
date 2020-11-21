/*
************
 LITERALS
************

    - Literals represent values in JavaScript. These are fixed values — not variables — that you literally provide in your code.

     (keyword)             (value) <---- the value of 'text' is a value that we provide directly in our code
        let  placeholder = 'text'
             (variable)

    - String literals
    - Numeric literals
    - Boolean literals
    - Object literals
    - Array literals

    MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
*/

// STRING LITERAL
let pacersMascot = 'Boomer';

// NUMERIC LITERAL
let luckyNumber = 4;

// BOOLEAN LITERAL
let lightOn = false;

// OBJECT LITERAL
let bikiniBottom = {
    treeDome: 'Sandy Cheeks',
    pineapple: 'Spongebob Squarepants',
    easterIslandHead: 'Squidward Tentacles',
    rock: 'Patrick Star'
}

// ARRAY LITERAL
let jollyRanchers = ['blue raspberry', 'green apple', 'cherry', 'grape', 'watermelon'];

// all of the values that we've stored in these variables are referred to as literals since we explicitly added them to our code. This is commonly referred to as 'hard coded' values - meaning we're not getting the data or information from another source, we're inputting it ourselves. 

/*
************
 HOISTING
************

    - hoisting was thought up as a general way of thinking about how our code is compiled and executed.
        - there are two general phases that happen when we run our code:
            - creation phase: any variable (var, let, const) and functions in our code are stored to memory.
            - execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

            (what's on the left side of the = is what's stored to memory during the creation phase) ---> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)
    
    - Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory.

    - when our code is read, the file is read top to bottom, line by line, in sequential order. 

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/

console.log(num); // undefined

/* 
    - notice that if we try to console.log 'num' before it is declared in our code, we get an error saying 'Cannot access 'num' before initialization'. This goes back to two points listed in our notes above: 

        1. our variable of 'num' HAS been hoisted, and our compiler recognizes that. We're not receiving an error telling us that 'num is not defined', we're receiving an error telling us that we 'Cannot access 'num' before intitialization' - so it knows a variable of num exists, because it was hoisted during the creation phase.
        2. our code is read top to bottom. So although our compiler recognizes that a variable of num has been declared and is stored in memory, we can't see that value yet because our console.log is placed ABOVE our declaration of 'num' in our code - so it's value has not been assigned yet. 
*/

let num = 12;

sayHi();
/*
    - we can also call a function before its declared, because not only are variables hoisted, but function delcarations are as well
*/

function sayHi() {
    console.log('Hi!!')
    let a = 'hello'
    console.log(a)
}

func(); // function expressions (which is just storing a function in variable), however, are not hoisted. Notice that we cannot access 'func' before initialization. Only function delcarations are hoisted. 

let func = function () {
    console.log('Will I run?');
}

// func(); // Will I run?

/*
************
  SCOPE
************

    - scope is the hierarchy of variables in our code - also commonly referred to as global scope and local scope, or parent scope and child scope. 
        - local scopes have access to global scopes, but not vice versa.

        overall JS document ---> [

                                    let coffeeType = 'dark roast'; <--- parent scope, or global scope. Can be accessed in local scopes
                                    
                                    function exampleFunction() {
                                        let x = 'declared inside function'; <--- x can only be used in exampleFunction. x's scope is local 
                                                                                 to exampleFunction 
                                    }

                                    console.log(x); // error, cannot access x outside of it's scope

                                ]
    

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

let coffeeType = 'dark roast'; // global scope
 
function exampleFunction() {
    let x = 'declared inside function'; // local scope
    console.log(x);
    console.log(coffeeType); // as mentioned in the notes, local scopes have access to globally scoped variables
}

exampleFunction();

// console.log(x); // error - x is not defined. We can't access the variable of x in the global scope of our document, because it is local to exampleFunction 