// DOM manipulation (without jQuery)
// Select a single element by its ID.
const idEl = document.getElementById('get-element-by-id');
console.log(idEl);
// Select a single element using CSS selector, returning the first matching element, or null.
const classEl = document.querySelector('.query-selector');
console.log(classEl);

// Same as querySelector, but returns a list of all matching elements.
const pEl = document.querySelectorAll('p');
console.log(pEl);

// Change the content of an element as HTML.
const divEl1 = document.getElementById('inner-HTML');
divEl1.innerHTML =
	"We used innerHTML to update this divEl's content and bold <strong>this</strong> word.";

// Change the content of an element as plain text.
const divEl2 = document.getElementById('text-content');
divEl2.textContent =
	"We used textContent to update this divEl's content as plain text.";

// Change the style of an element.

// Manipulate an element's attributes.

// Manipulate an element's class list.

// jQuery DOM manipulation
