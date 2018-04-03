//A variable is declared using var keyword
var score;
//when no value is assigned to the variable.The default value assigned is "undefined".
console.log(score);
//declare variable and assign value.
var newVar = 10;
//changing the value of the variable.
newVar = 9;

//declaring constants:Constants are the varialbe whose value does not change.The keyword used is const
const hoursInADay = 24;
console.log("the value of constant is"+hoursInADay)
/*Rules for declaring the variable.
The name of the variable can contain letter number or special charachters.
It can begin with either (_or$) and cannot begin with a number.
Reserved keycowrs cannot be used as variable name.
*/
//declaring a number.a number can be integer or fraction. A number is 64 bit long and hence only 2^64 number can be the largest number,
var score = 6;
var fractrionalScore =  5.5;
//declaring 5*10^8
var powerNumber =  5e8;
console.log("the power number is"+powerNumber);
console.log("the maximum number is"+Number.MAX_VALUE);
console.log("the minimum number is"+Number.MIN_VALUE);

//Arithmetic operations-- This includes addition,subtraction,multiplication,division,increment,dcecrement(shorthand for the same.)
var a =10;
var b=5;
//addition
var sum = a+b;
console.log("sum is"+sum);
//Multiplication
var product = a*b;
console.log("product is"+product);
//subtraction
var difference = a-b;
console.log("difference is"+difference);
//division
var division = a/b;
console.log("division is"+division);

//increment a variable by 2;
//method 1: b=b+2;
//shorthand 
b+=2;
console.log("the incremented value is"+b);
//incement by 1
b++;
//decrement by 1
b--;
//Operator precedence-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
//operator precedence defines how an expression is evaluated.

//modulus operator (%)-- this gives the remainder of a division
var remainder = 17%5;
console.log("the remainder is"+remainder);

//exponent operator(**) -- This operator is used to raise a base number to a power eg:3^4
var exponent = 3**4;
console.log("the value of exponent is"+exponent);

//power of a number can also be achieved using the pow function of Math object.
console.log("the 4th power of 2 is"+Math.pow(2,4));

//THere is a special number defined called the Infinity which is beyond the max value that js can handle.
//To check the type of a variable we can use the typeOf operator.
//To parse a given string into integer we can use the parseInt() function.
var stringNumber = "234";
//The parseInt function when unable to parse returns a special value call NAN(not a number),which is also a nnumber.
console.log("the parsed value is"+parseInt(stringNumber));
console.log("the type of parsed value is"+typeof(parseInt(stringNumber)))

//String.-- A set of characters wrapped in either single or double quotes
var name ='john';
var job = "developer"

//escape charachters in the string.
var someString = 'This is\'nt a normal string';
console.log(someString);

//adding new line or tab within a sentence.
var longSentence = "THis is a long sentence \n writter in two lines with \t tab";
console.log("the longsentence is"+longSentence);

//Concatenation: String caoncatenation is achieved using the '+' operator. 
var firstName = "Bill";
var lastName = "Gates";
var fullName = firstName +" "+ lastName;

//String has certain mehtods which can be uses eg :to find the leng	th of string,charachter at a given postion,charachter at the last index.
console.log("the lenght of the string is"+fullName.length);
//boolean -- primitive datatype which is either true or false.
var greaterThan = a>b;
console.log("is a greater than b "+ greaterThan);
//comparing two variables in JS is done using the "==" or the "===" -- the difference is that the first one does not check for the type of the variable and just compares the value but the second one compares the type along with the value.

//logical operators --  these are used when comparing multiple conditions. There are 3 logical operators And(&&),or(||) and not(!)
var logicalAnd = (a>b)&& (a>0)
console.log("is a greater than b and a is greater than zero " + logicalAnd );
var logicalOr = (a>b) || (b>remainder);
//Operator precedence for logical operator.In logical operators && takes a higher precedence than ||
var boolOperatorPrecedence = true && false || true // the result of this expression is true as firs the and is evaluated and then the or
console.log("the operator precedence is"+boolOperatorPrecedence);

/*
    Note: If using logical operatiors with non-boolean expression. for the AND logival operator the js engine check the first element and if it is teraversed to be true then the second element is returned or else the first element is returned. 
        eg: true && 'apple' returns apple
            false && 'apple' retruns false
    Similarly for the Logical OR operation if the first element is false then the second element is returned or otherwise the first element is returned.
        eg: false || true --> return true.
*/

// null and undefined.
var random;//this declares the variable but the value is undefined.

var otherRansdom=null; // this varialbe has no value assigned.-- typeOf return's object when the vale assigned to a variable is null


//type Coercion.(typecasting)-- Converting an variable of one type to another.
var addition = "1"+5;// the expected result would be 15 but, javascript internally convets 5 to astring and the result is 15-- this is also calle concatenation.

var subtraction = "1"-5;// assuming from the addition use case we would expect the answer to be 15 but the answer would be -4 since JS converts "1" to number 1 and hence the answer.

var mulitply = "one"*3// This return NAN as the answer.
/*
Primitives -- this does not have attributes or methods attached to it
Objects -- This can have attributes and method attached to it. It is a collection of attributes and methods.
*/
//define an object
var myObject = {
    //define properties: these are key value pairs
    phoneame:"Iphone",
    model:"SE",
    year:2015
};
//access a property
console.log(myObject.model);

//Arrays -- collection of elements.

