function linkBuilder(links){
// receive an array of 'strings' that are the names of
// Return all of the necessary <li> items
    let listHTML = '';

    links.forEach(function linkHandler(link){
        listHTML +=  `
   <li>${link}</li>
   `;
    });

    return listHTML;
}

export default function(state){
    return `
<nav>
  <ul>
    ${linkBuilder(state.links.primary)}
<li class="dropdown">
    Portfolio
    <ul>
${linkBuilder(state.links.dropdown)}
    </ul>
</li>
</ul>
</nav>
`;
}
