/*
    - STATIC LAYOUT
        - go over the static layout assignment
*/

// CHALLENGE 1
// Who's name is longer?

/* BRONZE

Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.

*/

let myName = 'Zach';
let friend = 'Isaiah';

console.log(myName.length);
console.log(friend.length);

/* SILVER

Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

*/

let myName = 'Zach';
let friend = 'Isaiah';

if (myName.length > friend.length) {
    console.log(`${friend}'s is name shorter than ${myName}'s name`);
} else if (myName.length < friend.length) {
    console.log(`${friend}'s name is longer than ${myName}'s name`);
}

/* GOLD

In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!

*/

let myName = 'Zach'
let friend = 'Isaiah'

if (myName.length > friend.length) {
    let letters = myName.length - friend.length
    console.log(`${friend}'s name is shorter than mine by ${letters} letters.`)
} else if (myName.length < friend.length) {
    let letters = friend.length - myName.length
    console.log(`${friend}'s name is longer than mine by ${letters} letters.`)
} else {
    console.log('Our names are the same length!')
}


// CHALLENGE 2
// Types Challenge

/* BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/

let object = {
    string: 'test',
    number: 10,
    boolean: false,
    obj: { key: 'sample' }
}

console.log(typeof object.boolean);

/* SILVER

Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

*/

let object = {
    string: 'test',
    number: 10,
    boolean: false,
    obj: { key: 'sample' }
}

let value = object.boolean;

if (typeof value === 'string') {
    console.log('this value is a string');
} else if (typeof value === 'number') {
    console.log('this value is a number');
} else if (typeof value === 'boolean') {
    console.log('this value is a boolean');
} else if (typeof value === 'object') {
    console.log('this value is an object');
} else {
    console.log('What are you?!')
}

/*
GIT LESSON
************

    - dir to see what directory you're currently in
    - cd into javascript<current_class>

    Folder Structure:
        javascript<current_class>
            javascriptLibrary
                0-prework
                1-jsFundamentals
                lectureNotes <-------- GIT REPO HERE

    GITHUB
        - signup or signin to github
        - create new repository called 'lectureNotes'
*/

/*
    In CMD:
        git init
        git status
        git add .
        git commit -m "message"

            NOTE: The first time you try to commit, you should see the following message appear:
                git config --global user.name "John Doe" <--- your GitHub username
                git config --global user.email johndoe@example.com <--- email associated with your GitHub account


        git remote add origin *paste repo here*
        git push origin master
*/