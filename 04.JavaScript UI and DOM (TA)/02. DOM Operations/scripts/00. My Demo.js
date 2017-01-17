// innerHTML - Returns as a string the content of the element, without the element
// outerHTML - Returns as a string the content of the element, with the element
// innerText / textContent - Returns as a string the text content of the element, without the tags

var mainDiv = document.getElementById('main-container');
console.log(mainDiv);   //returns null if there is no such element
var mainHeading = document.querySelector('#main-heading');
console.log(mainHeading);   //returns null if there is no such element
console.log('-------------------------------------1-------------------------------------');

var listItems1 = document.getElementsByTagName('li');
console.log(listItems1);
var linksByName = document.getElementsByName('link');
console.log(linksByName);
var listItems2 = document.querySelectorAll('li');
console.log(listItems2);
var listItems3 = document.querySelectorAll('#main-container li');
console.log(listItems3);
console.log('-------------------------------------2-------------------------------------');

var allLinks = document.links;
console.log(allLinks);
console.log('-------------------------------------3-------------------------------------');

var listItemsClass = document.getElementsByClassName('list-item');
console.log(listItemsClass);
console.log('-------------------------------------4-------------------------------------');

var listItems = document.querySelectorAll('#main-container li');
console.log(listItems);
//same as
var mainDiv = document.getElementById('main-container');
var listItems = mainDiv.getElementsByTagName('li');
console.log(listItems);
console.log('-------------------------------------5-------------------------------------');

// There are two kinds of NodeLists
// getElementsBy methods return a LiveNodeList
// querySelectorAll returns a StaticNodeList

// Live lists keep track of the selected elements
// Even when changes are made to the DOM
// While static list contain the elements as they were at the execution of the method

// Keep in mind that a LiveNodeList is slower than a regular array
// Need to cache its length for better performance
// Best converted to an array when iterated over multiple times

//-------------------------------------------------------------------------------------

var unorderedList = document.getElementById('unordered-list');
console.log(unorderedList.parentNode);
console.log(unorderedList.childNodes);
console.log('-------------------------------------6-------------------------------------');
console.log(unorderedList.firstChild);
console.log(unorderedList.lastChild);
console.log('-------------------------------------7-------------------------------------');
console.log(unorderedList.nextSibling);
console.log(unorderedList.nextElementSibling);
console.log(unorderedList.previousSibling);
console.log(unorderedList.previousElementSibling);
console.log('-------------------------------------8-------------------------------------');

var liElement = document.createElement("li");
console.log(liElement instanceof HTMLLIElement); //true
console.log(liElement instanceof HTMLElement); //true
console.log(liElement instanceof HTMLDivElement); //false
console.log('-------------------------------------9-------------------------------------');

var studentsList = document.createElement("ul");
var studentLi = document.createElement("li");
studentLi.innerHTML = 'This is created by JS';
studentsList.appendChild(studentLi);
document.body.appendChild(studentsList);
console.log('Creating the <ul> with one <li>This is created by JS</li>');
console.log('-------------------------------------10-------------------------------------');

// The DOM API supports inserting a element before or after a specific element
// appendChild() inserts the element always at the end of the DOM element
// parent.insertBefore(newNode, specificElement)

// Elements can be removed from the DOM
// Using element.removeChild(elToRemove)
// Pass the element-to-remove to their parent

var trainers = document.getElementsByTagName("ul")[0];
var trainer = trainers.getElementsByTagName("li")[0];
trainers.removeChild(trainer);
//remove a selected element
console.log('Removing the very first li of the very first ul');
console.log('-------------------------------------11-------------------------------------');

var links = document.links;
console.log(links);
for (var i = 0; i < links.length; i++) {
    links[i].style.color = 'red';
}