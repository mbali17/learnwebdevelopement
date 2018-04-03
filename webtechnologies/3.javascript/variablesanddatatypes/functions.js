//Fucntions-- Used to define a repeated task.
//defining a function without parameters 
function greeting() {
    console.log("Hello!");
}
//Define function with parameters
function greeting1(name) {
    console.log("Hello " + name);
}
//Uptil this point only the function are defined but, will not be invoked.
greeting();
greeting1("John");
//Returning values from a function. A function could return a value,undefined(when a function does not return anything),or another function itself.
//when passing parameters to the function we donot have to define the type.JS would handle this internally.
function sum(a,b){
    return a+b;
}

//function returning another function.
function greet(greeting){
    return function(name){
        console.log(greeting + " " +name+" !");
    }
}
// To invoke the above function 
greet("hi")("Mike");

//Pass by value and Pass by reference 
var a = 1;
var b = a;
a++;
console.log(a);//The value of a  is 2
console.log(b);//The value of 'b' is still 1 since any change to 'a' after the assignment does not affect.

//defining function 
function increment(c) {
	c++;
}
increment(a)
console.log(a);//The value of 'a' still remains 1 because the function accepts 'a' as pass by value hence, it would increment(1) and not increment(a).
//Using the variable directly.
function increment1(){
	a++;
}
increment1();
console.log(a);//The value of 'a' would now be incremented and the value of 'a' would have changed.

//Now let's try this with objects.
var person = {
	name : "Mike",
	age : 12
}
var person1 = person;
person.age++;
console.log(person);//The value of age is incremented.
console.log(person1);//The value of age is incremented as well. Since both objects point to the same memory location.
//First class function-- All functions in JS are first class i,e operation on variables can also be done on functions.
//Store function in a varialbe, Same as store value in a variable.
var func = function(a){
	console.log(a++);
}
//Invoke sum
func(3);
//use functions to set object properties, Same as use values to set object properties
var myPhone = {
	make : "Apple",
	model : "Iphone",
	warranty : 12,
	showWarranty :function(){
		console.log("The warranty of the phone is " + this.warranty +"months");
	}
}
//Invoke function of an object.
myPhone.showWarranty();
//Pass function to a function same as pass value to a function.
function square(a){
	return a**2;
}
//Passing function as parameter
function printSquare(func,number){
	console.log(func(number));
}
printSquare(square,3);

//return function as value.Make sure to add the semi colon after the declaration.however javascript would add that.
var squareofnumber = function (a){
	return function(){
		return Math.pow(a,2);
	}
};
console.log(squareofnumber);

//Function statement vs function expression -- Function statement is a regular way of declaring the function with the function keyword.while the function expression is declaring the function and assigning to a variable.
//Declaring function using function statement
function sum(a,b){
	return a + b;
}

//Declaring functions using function expression.
var myFunc = function(name){
	console.log("hello " + name);
}
//The Difference between the above two types of function declaration is that.With function statement style the function can be invoked before being declared but, with function expression this is not possible.
var evenNumbers=[2,4,6,8,10];
//Function returns the sum of squares of every number in an array.
var sumOfSquares = function(sqrFunc,arrayOfNumbers){
	var sum = 0;
	for(var i=0 ;i< arrayOfNumbers.length;i++){
		sum += sqrFunc(arrayOfNumbers[i])();
	}
	return sum;
}

console.log(sumOfSquares(squareofnumber,evenNumbers));

//Immediately invoked function expression(IIFE)
//declaring function using function statement
function funcStatement(){
	console.log("THis is the function statement");
}

//Declare using function expression.
var funcExpression =  function(){
	console.log("This is the function expression");
};
funcExpression();

//now the above statement can be done in a single line with declaration and invocation just by adding paranthesis to the end of the function declaration.
//Since the function does not return any value the value stored in funcExpression is undefined.
var funcExpression =  function(){
	console.log("This is the function expression which is self invoked");
}();
//If we do not want to store the value of a function in a variable an we just wanna execute it then we can do the following 
//declaring the function in the below manner would throw an syntax error as JS expects this to be function statement declaration.
//function(){
//	console.log("This is the function expression");
//}();
//Inorder to avoid this we can wrap the function in paranthesis.
(function(){
	console.log("This is the function expression which is self invoked withou assigning to a variable");
}());


//Scope
//This is a global variable since it is defined outside all functions. This variable is acessible in all functions   
var a = 0;

function f1(x){
	//Defining a again.
	var a =1;
	//When the value of a is evaluated it is 1 and not 0 since a is in the function scope. If a variable is passed as parameter then  the value of the parameter is used.
	return x+a;
}

//Note: When evaluating a value for a variable the order followed is 1)The variable is defined with in th function 2) if the variable is passed as parameter to the function. 3)if it is defined in the global scope. Now, if you use the variable that is not declared then you run into an error called ReferenceError.