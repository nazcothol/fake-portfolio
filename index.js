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

import Navigo from 'navigo';
/**
 * location.origin provs the 'base' URL for Navigo to get started
 * new creates a new instance of Navigo from its constructor fctn
 */
const router = new Navigo(location.origin);

// router
//  .on('/', function routerFxn(){
//        console.log('hello home page!');
//    })
//    .resolve();


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

        // TODO: 'page' will be updated after we fetch the data for the blog post.
        'page': `
        <p>Loading blog posts!</p>
        `
    }
};


function render(state){
    // We use function invocation that actually runs the fxn. and then `returns` the markup so that it is properly rendered in the browser.
    document.querySelector('#root').innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Main(state)}
        ${Footer(state)}
    `;

    // updatePageLinks() works in conjunction with 'data-navigo' and the <a href>s found in the Navigation functional component.
    router.updatePageLinks(); // Replaces our custom click event listeners with the recursive render.
}

// To render a page, we pass in a piece of state.
render(store.home);

/**
 * .on is a Navigo method that behaves as any event listener might.
 * It 'listens' to location.pathname and responds accordingly
 *
 * https://github.com/krasimir/navigo#parameterized-urls
 *
 * Whatever comes in as 'location.pathname',
 * 'save' that in the 'params' object under the 🔑 'page.'
 *
 * resolve() is a 'navigo' method that triggers the 'routing' to happen using `on()`'s cb fxn. (https://www.npmjs.com/package/navigo#resolving-the-routes)
 */
router
    .on(':view', function renderFromParams(params){
        render(store[params.view]);
    })
    .resolve();
