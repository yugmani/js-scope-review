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
function testfn() {
  const myName = 'Batman';
  console.log(myName);
  console.log(num);
}
//console.log(myName); //myName is not defined

//invoke function
testfn();

//global scope
console.log(num);
console.log(myName);
