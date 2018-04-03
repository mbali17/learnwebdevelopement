//Window is the object which consists of the complete information about the current document. Inspect the object in the console to know more properties. This includes the document structure the child nodes and other details.It also consists of some global functions  that can be directly invoked like alert,confirm etc..
console.log(window);
//Accessing elements in JS.
//Accessing using the id of the element.The typeOf of this operation is an object.
console.log(document.getElementById("p1"));
// After the element is retrieved.we can access the properties of the element.
console.log(document.getElementById("p1").innerHTML);

//Accessing list of elements by tag name.This returns an object which is can HTMLCollection
console.log(document.getElementsByName("p"));

//Accessing the first element.This can be applied with classes as well.
console.log(document.querySelector("p"));

//Manipulating specific element of the HTML collection
console.log(document.getElementsByTagName("p")[1].innerHTML);
// Access children of a node.
var childrenOfTheBody = document.body.children;
console.log(childrenOfTheBody);
//Add new child to the body.This is done by creating element, create text, append the text to the element and finally append the element to the body.
var newParagraph = document.createElement("p");
var textNode = document.createTextNode("This is a new paragraph");
newParagraph.appendChild(textNode);
document.body.appendChild(newParagraph);

//Accessing siblings.Siblings are the elements that have a common parent.In our DOM.html document the sidblings of p tag are other p tags h1 and script tag.
var siblings = document.getElementById("p1").nextElementSibling;
console.log(siblings);
//accessing parent node of the element.
console.log(siblings.parentNode);

//Change the HTML content of the DOM element. To append to an existing element we can use += like a string concatenation.We can use the textcontent property as well where we can set the new text.
var firstParagraph = document.getElementById("p1");
firstParagraph.innerHTML = "This is the new text";

//Setting an atribute of an element.value passed to the function is of the form <attr_name,value>
document.getElementById("link").setAttribute("href","http://www.yahoo.com");

//Changing style property
firstParagraph.style.background = "Green";
//forEach method is not avaialble in the HTMLCollection object hence we would need to add to the prototype if we need this method to be available for all the objects hence forth.
//There is an method for removing the child element for a given parent.But there is no method for Remocvig a given element we can add this using the following method.
Element.prototype.remove = function(){
	var parent  = this.parentElement;
	parent.removeChild(this)
}
document.getElementById("list1").remove();
//Handling events : Events are used to make the web page more interactive.There are various events that can be associate with an element.
var button1 = document.getElementById("button1");
button1.onclick =  function(){
	console.log("Button 1 is clicked.");
};
// If we need to execute two functions when an element is clicked we could just write the onclick function twicebut, doing so the function calls get overriden and only the final event gets attached.So, in order to avoid that we can use another function called the addEventListener where we can add same events to the same elemet but execute a different function.

button1.addEventListener("click",function(){
	console.log("Listening event for button1 function1");
});

button1.addEventListener("click",function(){
	console.log("Listening event for button1 function2");
});


var sinFunction = function(){
	console.log("THis is invoked");
	var title = document.getElementById("title");
	title.style.position = "fixed";
	title.style.top = Math.floor(Math.random()*500)+"px";
	title.style.left = Math.floor(Math.random()*600)+"px";
	title.style.right = Math.floor(Math.random()*700)+"px";
	title.style.bottom = Math.floor(Math.random()*800)+"px";
	title.style.backgroundColor = "blue";
	clearInterval(sinFunction);
	
} 
//setInterval(sinFunction,5000);

//key events: These are the events associated with key elements pressed.There are events like keydown and keyup
//Attach an event listener
addEventListener("keydown",fnkeydown);
function fnkeydown(event){
	// The  event object has details about the key pressed,key code etc refer the object printed in the console to know more
	console.log(event);
}

//Mouse eventsL: The events aasociate with mouse are mouse up and mouse down,mouse move like other event we need to attach these events using eventlistener. In the propoerties listed for the mouse event pagex and pagey represent the postion of the event beginning from the top left corner.Where as client x and y represent the current view the document is scrolled into. 
addEventListener("mouseup",function(event){
	console.log(event);
});

//Scroll event
addEventListener("scroll", function(){
	console.log(pageXOffset);
	//getCurrent percenttage scrolled.
	console.log(Math.round(pageYOffset/(document.body.scrollHeight- innerHeight)*100)+"%");
	//console.log((document.body.scrollHeight - innerHeight)/100 );
})

var input = document.body.querySelector("input")
//Focus: This event is triggered when element is focused using the mouse and the opposite of this is blur.
input.addEventListener("focus",function(event){
	console.log(event.target);// returns the element that is being focused.
	console.log(event.target.value);
})

//blur
input.addEventListener("blur",function(event){
	event.target.value="";
})
// In order to prevent the default behavior of an element we can use the preventDefault method of the event object.
var anchor = document.getElementById("link");
anchor.addEventListener("click",function(event){
	event.preventDefault();
});
var timeOut;
// Debouncing: This is the technique used to avoid the instances of memory overflow or consumption of more memory.
document.addEventListener("mousemove",function(event){
	//This event keeps triggering even when the interval is not reached. Which might lead to memory usage.In order to avoid this we can use debouncing where we cancel all the activities with in an time period.
	/*setTimeout(function(){
		console.log("Mouse is moved.");
		console.log(event.pageX);
		console.log(event.pageX);
	},5000)*/
	clearTimeout(timeOut);
	 timeOut = setTimeout(function(){
		console.log("Mouse is moved.");
		console.log(event.pageX);
		console.log(event.pageX);
	},5000)
	
});

// Event Propogation : When we attach events to the elements that are nested within each other.The order of the events that are triggered is the inner most element is triggered first followed by the elements going outward. This process is called event bubbling and if we want the events attached to the outer elements to be triggered first then we would have to use a flag called the event capture which is by default false, this is the third param to the eventlistener method.After the element is triggered the other element follow the same fashion of innermost element being triggered at first followed by the outer elements
document.getElementById("outer").addEventListener("click",function(){
	console.log("outermost");
},true);
document.getElementById("middle").addEventListener("click",function(){
	console.log("middle");
});
document.getElementById("inner").addEventListener("click",function(){
	console.log("innermost");
});

//Event Delegation: If we want to add events to the elements that are dynamically added to the UI. Then, we can use event delegation 
