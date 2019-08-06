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
// holds the pieces of State down there
const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Learnings',
        'page': `
            <main>

            <section class="float">
                <h2>Mission</h2>
                <p>This site may not be as slick as <a href="https://pageandsound.com/"><text x="10" y="25">Page and Sound</text></a>, but there is a reason for that. The goal for this site is to serve as a playground to show off and try all the techie things I'm learning. Everything here is made from scratch. No WordPress, just straight HTML, CSS, Javascript, and other bare-bones technologies that I'm learning. Projects shared here may be rough, but that's how learnings work.
            <a href="#" class="cta-btn">Read More!</a>
            </section>
            <section>
                    <h2>This is a section</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid atque, impedit, distinctio exercitationem omnis esse hic quisquam magni quis fuga qui vel consequatur natus itaque iusto, fugit unde deserunt.</p>
                    <a href="#" class="cta-btn">Read More!</a>
                </section>
            </main>`
    },

    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': ''
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': ''
    },
    'blog': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Blog Page',
        'page': 'Coming Soon!'
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
    // nav functional component renders 'new' links each time
    // the elements won't exist until pages are rendered
    const navItems = document.querySelectorAll('nav>ul>li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem){
        navItem.addEventListener('click', function clickHandler(event){
            event.preventDefault();

            render(store[event.target.textContent.toLowerCase()]);
        });
    });
}
render(store.home);
