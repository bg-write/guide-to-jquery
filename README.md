# Brady Gerber's Guide to jQuery

## Topics Covered in "jquery.js"

### Examples of DOM Manipulation without jQuery
* `.getElementById()`
* `.querySelector()`
* `.querySelectorAll()`
* `.innerHTML`
* `.textContent`
* `.style`
* `.getAttribute()`, `.setAttribute()` & `.hasAttribute()`
* `.classList`: `.add()`, `.remove()`, `.toggle()`, `.contains()` & `.replace()`
* `.addEventListener()`
* `.createElement()`

### Examples of DOM Manipulation with jQuery
* Selecting elements by IDs, classes, and tags
* `.html()`
* `.attr()`
* `.css()`
* `.ajax()`

## But First, What the Heck is jQuery?
jQuery is a lightweight JS library designed to simplify HTML DOM tree traversal and manipulation. It's client scripting that uses CSS selectors to select specific elements. IT is NOT W3C standard.

jQuery's official website: https://jquery.com/

To use jQuery, you can refer to a hosted jQuery library at Google (check the `<head>` inside "index.html" to see what and where to add the jQuery script): https://developers.google.com/speed/libraries/

## OK, but why the "$"?
The "$" sign is a shortcut for jQuery selectors.

```
$(function(){
  $(selector).action();
});
```

`$(function(){});` is shorthand for `$(document).ready(function(){});` This prevents code from running before the document is finished loading.

## Selectors
```
$('h1') // select all "h1" elements
$('#heading1'); // select the element with id "heading1"
$('.heading2') // select all elements with class "heading2"
$('p span') // select all "span" elements inside "p" elements
$('h1, #header, .header') // select all "h1" elements and elements with id and class of “header”

$('#list li:first') // select the first "li" element inside the element id'd as "list"
$('#list li:last') // select the last "li" element inside the element id'd as "list"
$('#list li:even') // select all even "li" elements inside the element id'd as "list"
$('#list li:odd') // select all odd "li" elements inside the element id'd as "list"
$('#list li:nth-child(3n)') // select the 3rd "li" child inside the element id'd as "list"

$(':button') // select the input element with type "button"
$(':submit') // select the input element with type "submit"
$(':text') // select the input element with type "text"
$(':disabled) // select all disabled input elements

$('[href]') // select the element with an "href" attribute
$('a[href="http://yahoo.com"]') // select the a element with an "href" attribute that contains the value "http://yahoo.com"
```

## Mouse Events
```
$('#btn1').on('click'; 'dblclick'; 'hover'; 'mousemove'; 'mousedown'; 'mouseup', function () {
	// .hide(); .show(); .toggle(); .toggleClass(‘myClass’); .height(px); .noConflict();
});

$('#btn1').on('click', function (e) {
	console.log(e);
	console.log(e.currentTarget.id);
	console.log(e.currentTarget.innerHTML);
	console.log(e.currentTarget.outerHTML);
	console.log(e.currentTarget.className);
});

$(document).on('mousemove', function (e) {
	$('#coords').html('Coords: Y: ' + e.clientY + 'X: ' + e.clientX);
});
```

## Form Events
```
$('input').on('focus'; 'blur', function () {
$(this).css('background', 'pink');
});

$('input').on('keyup'; 'change', function (e) {
	console.log(e.target.value);
});

$('#form').on('submit', function (e) {
	e.preventDefault();
	const name = $('#name').val();
	console.log(name);
});
```

## DOM manipulation
```
.css({color: 'red', background: '#ccc'})
.addClass('myClass')
.removeClass('myClass')

.text('hello world')
.text() // to return the text value
.html('<h3>hello world</h3>')

.append('<li>Appended item</li>');
.prepend('<li>Prepend item</li>');
.appendTo('.para4');
.prependTo('.para4');
.before('<h4>Hello</h4>');
.after('<h4>World</h4>');
.parent();
.empty();
.detach();
.remove();

.wrap('<h1>');
.wrapAll('<h1>');

$('#newItem').on('keyup', function (e) {
	let code = e.which;
	if (code === 13) {
		e.preventDefault();
		$('ul').append('<li>' + e.target.value + '</li>');
	}
});

// Manipulate a div with a click event using keyboard controls
$(document).keypress(function (e) {
	if (e.which == 13) {
		// "13" is the "Enter" key
		console.log('The "Enter" key was pressed!');
		$('#five').click();
	}
});
$('#five').click(function () {
	console.log('The div ID\'d as "five" was clicked!');
	$('#five').css({ color: 'red' });
});
```
## Working with Attributes
```
.attr('role', 'presentation');
.attr('href');
.removeAttr('target');
```
## Working with Arrays
```
let myArr = ['Brad', 'John', 'Jane', 'Mark'];

$.each(myArr, function (i, val) {
	$('#users').append('<li>' + val + '</li>');
});

const newArr = $('#list2 li').toArray();
$.each(newArr, function (i, val) {
	console.log(val.innerHTML);
});
```
## Effects & Animations
```
$('#btn').on('click', function () {
	$('#box').fadeOut(3000), function () {
		$('#btn').text("Something happened!!");
	}); // also .fadeIn(); .fadeToggle(); .slideUp(); .slideDown(); .slideToggle(); .stop(); .animate({left: 500, height: '300px'})
});
```
## Ajax
```
$.ajax({
	url: 'https://jsonplaceholder.typicode.com/users',
	data: {
		name: 'Ervin Howell',
	},
	success: function (result) {
		$('#api-call').html(
			'Here\'s the email for ' + result[0].name + ': <br>' + result[0].email
		);
	},
});

```
#### See "jquery.js" to see the difference between vanilla JS and jQuery DOM manipulation in action!