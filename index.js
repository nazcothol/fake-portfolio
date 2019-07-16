/*
loop, comparison operators to check if val of var is empty or not
if a funct starts with cap it's known as a function constructor.
= is assignment operator, name === "Steve" is comparison operator
% math operator that returns just the remainder
use template literals instead of just + to concatenate
*/
/* let fname = prompt('Whaat is your first name?');

while(!fname){
    fname = prompt('No really, What is your name?');
}

let lname = prompt('Whaat is your last name?');

while(!lname){
    lname = prompt('No really, What is it?');
}
document.querySelector('h1').textContent = (`Hello ${fname} ${lname}`);*/
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

document.querySelector('#root').innerHTML = `
${Navigation}
${Header}
${Main}
${Footer}`;
