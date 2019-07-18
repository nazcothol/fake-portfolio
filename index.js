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
}
render(states.home);

const navItems = document.querySelectorAll('nav>ul>li:not(.dropdown)');

let i = 0;
// here i will run from 0 until 3.
// 'i' will serve as a placeholder to represent the index of the item we need to access from navItems

while(i < navItems.length){
    // use val of i as an index to access the navItem.
    navItems[i].addEventListener('click', function clickHandler(event){
        event.preventDefault();
        // 'target will reveal what generated the event - that is, what was'clicked'

        const clickedItem = event.target;
        const clicked = clickedItem.toLowerCase();

        render(states[event.target.textcontent]);
    });
    i += 1;
}


/* We want to re-render page based on what user clicks in navigation menu
1. capture what was clicked in nav - what is the text of the element that got the click
2. access a piece of state based on said text
3. show the new vue **render function**
4.5. re-render page with new piece of state that is derived from what was clicked
*/
