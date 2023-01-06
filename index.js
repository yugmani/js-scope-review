// Import stylesheets
import './style.css';

//Review of Scope in Javascript
// ***************************** */

//global variable
const num = 100;
const myName = 'JavaScript';

//block scope
if (true) {
  const myName = 'Yoog';
  console.log(myName);
  console.log(num);
}
//console.log(myName);  //myName is not defined

//function scope
function name() {
  const myName = 'Batman';
  console.log(myName);
  console.log(num);
}
//console.log(myName); //myName is not defined

//invoke function
name();

//global scope
console.log(num);
console.log(myName);

//scope in nested function
// ***************************

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }

  inner(); //invoking nested function
}

//invoke outer function
outer(); //10 20 30

//Closure
// **********************

function parent() {
  let counter = 0;

  function child() {
    counter++;
    console.log(counter);
  }

  // child();
  return child;
}

//invoke parent function
// parent(); //1
// parent(); //1

const fn = parent();
fn(); //1
fn(); //2 //?
