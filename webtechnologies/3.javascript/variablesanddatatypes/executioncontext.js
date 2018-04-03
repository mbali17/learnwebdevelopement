// When the JS starts executing it begins by creating an execution context called the global execution context. The variables and methods that are part of this execution context are accessible by anywhere in any function.JS engine also creates two more variables called the global object and this. The object created in the global scope is window. and "this" also  points to the current object. All the variables and functions created in the global scope are attached to the window object.
console.log(greet());
console.log(language);

var language = "javascript";
function greet(){
	console.log("Hello There!!");
}
/*
	When JS is executed it creates an execution context  and the first step in this process is called hoisting. This is divided into two parts. in phase1 all the declared variables which are initialized to undefined even though initialized with other value and in the second phase functions are copied into memory.Hence when we access a vaiable which is declared but not initialized we get the value as undefined.
	
	For each function called in the global execution phase there is new excetuion context for that fucntion. The variables and function declared in this function are hoisted and executed. THis process is carried on for all the function being called.
	Foreg: when in the line1 the greet function is called a new execution context is created i,e it goes through the process of hoisting where the variables declared in the function are created in the execution context and initialized to undefined, Then during the execution context execution phase these variables are assigned values and the execution context is pushed on to the stack. Once this execution context is executed it is removed from the stack.
	Hoisting occurs only if the variable and functions are declared in the function.
*/

var string = "Hello"

function string(){
	return "hello";
}

console.log(typeof string)// THis is going to print the type as string. Because when there is a variable and fucntion with same name then the function is ignored during the execution. but, If we declare the fucntion using fucntion expression then this would not happen.
var string = function(){
	return "hi";
}

console.log(typeof string);// This prints out as fucntion

//global scope
//The global execution context has the variable and function f1 declared.
var x = 0;
f1();
console.log(this); // This prints window object
// any function that is not attached to an object gets attached to the window and the "this" variable points to window
function f1(){
    var x = 1;
    var y1 = 'f1 scope';
    console.log(x);
    console.log(this);
    f2();
    function f2(){
        var currentScope = 2;
        var y2 = 'f2 scope';
        console.log(x);
        console.log(this);
        f3();
        function f3(){
            var currentScope = 3;
            var y3 = 'f3 scope';
            console.log(x);
            console.log(this);
            //climb up the scope chain to get y1, y2, y3. Where the search for a variable goes from the current function execution context and goes up the function enclosing it.
            console.log(y1);
            console.log(y2);
            console.log(y3);
            
        }
    }
}

var somecompany = {};
somecompany.somefunction= function(){
	console.log("this is some function");
	console.log(this);// this is attached to the somecompany object and hence it would not print window,.
}

somecompany.somefunction();