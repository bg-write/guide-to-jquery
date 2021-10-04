// DOM manipulation (without jQuery)
// Select a single element by its ID.
const idEl = document.getElementById('get-element-by-id');

// Select a single element using CSS selector, returning the first matching element, or null.
const classEl = document.querySelector('.query-selector');

// Same as querySelector, but returns a list of all matching elements.
const pEls = document.querySelectorAll('p');
// And use a loop to do things to all the elements we select!
for (let pEl of pEls) {
	pEl.innerHTML = pEl.innerHTML.toUpperCase();
}

// Change the content of an element as HTML.
const divEl1 = document.getElementById('inner-HTML');
divEl1.innerHTML =
	"We used 'innerHTML' to update this div's content and bold <strong>this</strong> word.";

// Change the content of an element as plain text.
const divEl2 = document.getElementById('text-content');
divEl2.textContent =
	"We used 'textContent' to update this div's content as plain text.";

// Change the style of an element.
const divEl3 = document.getElementById('style');
divEl3.style.color = 'blue';

// Manipulate an element's attributes.
const divEl4 = document.getElementById('attribute-id');
divEl4.setAttribute('class', 'attribute-class');
divEl4.getAttribute('class'); // returns 'attribute-class'
divEl4.hasAttribute('class'); // returns 'true'

// Manipulate an element's classes.
const divEl5 = document.getElementById('class-list');
divEl5.classList.add('class1', 'class2', 'class3');
divEl5.classList.remove('class1');
divEl5.classList.toggle('class2');
divEl5.classList.contains('class3'); // returns 'true'
divEl5.classList.replace('class3', 'updated-class-3');

// Create an Event Listener, and create a new element with that same Event Listener.
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
	alert(
		"You clicked the button! Check your console, and you'll see that you also created a new div."
	);
	const divEl6 = document.createElement('div');
	console.log(divEl6);
});

// DOM manipulation (with jQuery!)
// Getting an element by its ID like "getElementsById()".
// Manipulating the HTML like "innerHTML". This works for HTML documents, but NOT XML.
$(function () {
	$('#jquery-element').html(
		'We selected <b>this</b> div by its ID, and then we update its content with "html".'
	);
});

// Getting an element by its ID, class, or element type like "querySelector()", "querySelectorAll()", and "classList".
// Manipulating the selected elements' CSS like "style".
// And manipulate its Attributes, like "setAttribute()", "getAttribute()", and "hasAttribute()" .. you can chain all these methods together!
$(function () {
	$('#jquery-element, .jquery-element, h3')
		.attr('role', 'presentation')
		.css({ color: 'red' });
});

// Ajax w/ jQuery
// How we're able to perform asynchronous HTTP requests with jQuery.
$.ajax({
	url: 'https://jsonplaceholder.typicode.com/users',
	data: {
		name: 'Ervin Howell',
	},
	success: function (result) {
		$('#api-call').html(
			"Here's the email for " + result[0].name + ': <br>' + result[0].email
		);
	},
});