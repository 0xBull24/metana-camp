// DOM the is hierarchical tree of nodes for the web page 
// Use the DOM to access different nodes(querying) in the tree to update the visual/content of the web page

const para = document.querySelector('p');
const error = document.querySelector('.error');
const divError = document.querySelector('div.error');
const h1 = document.querySelector('body > h1');

console.log(para);
console.log(para.innerText);
para.innerText = 'Lets go lakers';
console.log(error);
console.log(divError);
console.log(h1);

// returns a node list - similar to array but not the same
const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[0]);

paras.forEach(element => {
    console.log(element.innerText);
    element.innerText += ' new text'
});

const errors = document.querySelectorAll('.error');
console.log(errors);

// We can also grab elements by id 

const title =  document.getElementById('page-title');
console.log(title);

// We can grab elements by class name and returns an Html Collection but not like a node list or array

const pageErrors = document.getElementsByClassName('error');
console.log(pageErrors);

// We can grab elements by their tag name as well
const p = document.getElementsByTagName('p');
console.log('p tags', p);

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2> This is a new h2 </h2>';

// Adding values from the data directly to the page
const people = ['mario', 'sonic', 'kirby']
people.forEach(element => {
    content.innerHTML += `<p>${element}</p>`
})

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute("href", "https://www.twitch.tv/");

const message = document.querySelector('p.error');
console.log(message.getAttribute('class'));

// Attributes that are not on an element can be added
message.setAttribute('style', 'color: red');

// This will also override attributes of values that are there
// but we can update the property directly
title.setAttribute('style', 'margin: 50px');
console.log(title.style);
title.style.color = 'orange';

console.log(error.classList)
error.classList.remove('error');
error.classList.add('success');

// challenge: grab all p tags inside challenge div
// if innertext of p tag contains success add success class
// else if innertext of p tag contains error add error class
const challengePTags = document.querySelectorAll('div.challenge > p')
console.log(challengePTags); // ✅
challengePTags.forEach(element => {
    if (element.innerText.includes('success')){
        element.classList.add('success')
    } else if (element.innerText.includes('error')) {
        element.classList.add('error')
    }
})

title.classList.toggle('test'); // gives an element a class until toggle is called again or class is removed again