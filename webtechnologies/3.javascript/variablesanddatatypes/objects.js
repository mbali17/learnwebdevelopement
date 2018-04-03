//Creating object using object literal notation.It uses the brackets to define an object.
var myPhone ={
	//These are the properties.
	make : "Apple",
	model : "Iphone SE",
	warranty : 12,
	colour : "gold",
	//This property is called a method.
	ring : function(){
		console.log("Hello HELLO");
	}
}
//printing property.
console.log(myPhone.make);
//Accessing method.
console.log(myPhone.ring());
//Accessing object properties using dot or brackets notation.
//using dot notation.
console.log(myPhone.model);
//Using brackets notation
console.log(myPhone['warranty']);
//The need for bracket notation is, when the value of the property is stored in a variable,
var x = "make";
console.log(myPhone.x);//This prints undefined since JS searches for property x in object myphone.
console.log(myPhone[x]);//This prints the value.
//Return random property name of an object.
function getProperty(){
	var properties = ["make","model","warranty","colour"];
	return properties[Math.floor(4*Math.random())];
}
console.log(myPhone[getProperty()]);

//using Object constructors(This creates an template for an object.) and new keyword
//Built in constructor called object
var myDefaultPhone =  new Object();//This creates an empty object just like using  {}
//Adding property to the object.
myDefaultPhone.make = "LG";
myDefaultPhone.model = "MotoG";
myDefaultPhone.warranty = 12;
myDefaultPhone.ring =  function (){
	console.log("This is the default ring");
}
//Creating custom constructors. These constructors are also sometimes referred to as classes in JS.These are useful when there are multiple objects to be created.
function phone(make,model,warranty,color){
	this.make = make;
	this.model = model;
	this.warranty = warranty;
	this.color = color;
	//We can add methods as well to the constructor but this is not a good practice as it adds to the execution time and memory. It is always recommended to add the methods to the protoype which is the class.
}
//Creating object using our constructor.
var myNewPhone = new phone("Nokia","1110i",33,"grey");
console.log(myNewPhone);
//We can as well add new property to the object.But, that property is added only to the current object and not all the objects.In order to add the propoerty to all the objects created here after it can be added to the protoype But, this property id not added as  part of the constructor.Only code that gets executed when the constructor is invoked is the code in the constructor.
//adding property to the current object.The "condition" property just gets added to the myNewPhone object.
myNewPhone.condition = "Like almost old";
//adding property to the prototype.Which has common values for all the objects.
phone.prototype.condition = "like new property";
var myOtherPhone = new phone("Mi","RedMi",33,"grey");
console.log(myOtherPhone);
//Adding method to the Prototype.The Methods added to the prototype is not added to the object rather the object inherits this methods fromt the protoype.
phone.prototype.ring = function(){
	console.log("Ringing from the prototype.");
}
console.log(myOtherPhone.ring());

//Object Equality: To compare two object we cannot use the "==" as this compares two memory location rather than the content of the object hence, Inorder to compare two objects we need to iterate through the objects and compare the properties.
//Reference for object equality: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html 
//String object methods
var str1 = "javasript";
var str2 = " is really fun! ";
var str3 = "java";
//Char at postion
console.log(str1.charAt(2));
//Concatenatenate string
console.log(str1.concat(str2));
//contains of another string.
console.log(str1.includes(str3));
//Converting string primitive to string object
var strObj = new String("Hello world!");
console.log("Using object " + strObj);
var primitive = strObj.toString();
console.log("using Primitive " +primitive)
//Following are the methods for an object and hence can refer the documentation are 
//Date Object- used for date and time functions.

//JSON -- This is called Javascript Object Notation. It is used to exchange data between the client and the server.
var normalObject = {
	name : "John",
	age : 13,
	isEmployed : false
};
//The difference compared to a normal object is that both the key/value are surrounded by double quotes
var jsonObject = {
	"name" : "John",
	"age" : "13",
	"isEmployed" : "False"
};
//Note: To parse a JSON obtained from the server we can use JSON.parse() method and to convert to string we can use JSON.stringify() method.We can also create JSONArray as well 
var jsonArray = [
	{
	"name" : "John",
	"age" : "13",
	"isEmployed" : "False"
},{
	"name" : "sham",
	"age" : "31",
	"isEmployed" : "true"
}
];

//Arrays are objects which are a collection of homogeneous objects.
//Create arrays using square brackets 
var shoppingList = ["bread","milk","butter"];
//Create arrays using constructor.
var otherList = new Array("Bread","Milk","butter");
//accessing an element in the array 
console.log("the elements at position 2 is"+otherList[2]);
//delete an element from the array-- To do this we use the keyword "delete" followed by the arrayname[index]. This method deletes the value present at the index.but,does not reduce the array length
delete shoppingList[1];
//Adding an element to the end of the array.This returns the arraylenght after the addition
otherList.push("Strawberry");
//Removing an element at the end of the array.This method returns the last element removed.
otherList.pop();
//Inorder to remove the elements at the beginning of the array we can use the shift method
shoppingList.shift();
//To add the elements at the beginning of the array we can use the unshift method
shoppingList.unshift("Tomato","Potato");

//map,splice,slice,sort,reverse,every,filter.
//splice-- this method is used to go to a specific index and replace the value of the elements with the new value.Read the below line as goto index 1 replace 2 elements with the values passed.
shoppingList.splice(1,2,"grapes","berry");
//slice -- This method returns the sub array of the number of elements specified as a new array.
shoppingList.slice(0,2);//From index 0 return two elements as new array.
//sort -- Returns the sorted array.
otherList.sort();
//reverse -- Reverses a given array.
otherList.reverse();
//map-- Applies a given function to every element in the array.
var modArray = otherList.map(function(n){
	return "Delecious "+n;
});//This method does not modify the original array rather creates a new array of the modified elements.
console.log(modArray);
//filter- As the name suggests it filters elements based on the given condition passed as a function.
var someNumbers=[2,45,66,67,89,90,100];
//filter even numbers in an array.returns new array containing the filtered elements.
var filteredNumbes =someNumbers.filter(function(n){
	return n%2 == 0;
})
console.log(filteredNumbes);
//Inorder to check a specfic condition for all the elements we can use the every method.
//Loop through using for each.Any param passed to the function referrs to the element and not the index like the normal for loop 
otherList.forEach(function(element){
	console.log(element);
})