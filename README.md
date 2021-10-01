# Brady Gerber's Guide to jQuery

## Topics Covered

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

## What the Heck is jQuery?
jQuery is a JavaScript library for simplifying DOM manipulation. It's client scripting that uses CSS selectors to select specified elements. It is NOT a W3C standard.

jQuery's official website: https://jquery.com/

To use jQuery, you can refer to a hosted jQuery library at Google (check the `<head>` inside "index.html" to see what and where to add the jQuery script): https://developers.google.com/speed/libraries/

## OK, but why the "$"?
The "$" sign is a shortcut for jQuery selectors.

`$(function(){
  $(selector).method();
  });`

## Examples of selectors
* `$("div")` => Selects all div elements
* `$("div.intro")` => Selects all div elements with the class "intro"
* `$("p#intro")` => Selects the p element with the ID "intro"
* `$("div p")` => Selects all p elements inside a div element
* `$(":disabled")` => Selects all disabled input elements

#### See "jquery.js" to see the difference between vanilla JS and jQuery DOM manipulation in action!