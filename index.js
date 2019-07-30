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
// bring in the functional components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'Learnings'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    }
};


function render(state){
    // we use function invocation that actually runs the fnctn and then 'returns' the mkup so it's prop browser rendered
    document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;

    const navItems = document.querySelectorAll('nav>ul>li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem){
        navItem.addEventListener('click', function clickHandler(event){
            event.preventDefault();

            render(states[event.target.textContent.toLowerCase()]);
        });
    });
}
render(states.home);
