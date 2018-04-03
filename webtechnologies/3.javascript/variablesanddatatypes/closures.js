/*
Closures are functions defined within another function scope and has reference to the variables defined in that scope.
*/

var add = function(){
	var x =1;
	var f = function(y){
		return x+y;
	}
	return f;
}
var addition =  add();
console.log(addition(3));
/*
So, When the above code is executed there is a global execution context created. which creates the variables addition and add during execution context creation phase assigning the value undefined.During the execution context execution phase it assigns the value of the add to function, addtion to the return value of add and  console.log(addition(3)).Now, the add function execution context is created which has the variable x,f during the execution context creation and assgign the value of the x and f accordingly during the excecution context execution phase. Now, When the control is at the console.log line the execution context of the add function is not present anymore. But, when the function is executed it needs th value of x inorder to continue.Here, the function f has the refrence to the variable declared in the enclosing funcion and as well as the variable created inside the enclosing execution context where it is declared.Hence it executed the statement x+y and returns the value. This situation where the inner function has a reference to the  varaible of the outer function is called a closure.
*/

//another example
var addagain = function(x){
	var f = function(y){
		return x+y;
	}
	return f;
}
var additionagian =  addagain(3);
console.log(additionagian(3));

// Changing the value of the enclosing variable. 
function car(){
	var make;
	return {
		setMake: function(x){
			make = x;
		},
		getMake: function(){
			return make;
		}
	}
}

var myCar = car()
console.log(myCar.getMake());
myCar.setMake("BMW");
console.log(myCar.getMake());
//Note: When declaring variable without the var keyword refer https://stackoverflow.com/questions/2485423/is-using-var-to-declare-variables-optional.
var n;
function f(x){
	n = function(){
		return x;
	};
	x++;
}
f(23);
console.log(n());


function someFunction (x){
	var fn = function(){
		console.log(x)
	}
	return fn;
}
// The following loop is expected to access the button using the id ranging from 0 to 2 and attach a click function for all the buttons and on clicking of the respective button pressed print the value of i associated. However this does not happen and the value of i printed is 3 for every button pressed. The reason for this is while the loop is going through its iterations the value of i keeps incrementing and finally when the loop is terminated the value of i is 3. Aand when the click function is called the process of finding the element i is started. The variable i is found in the outer scope and the final value assigned is 3. Now, to overcome this we can use closure where we assign the value to the parameter passed and every call is going to have it's own execution context.
for(var i=0;i<3;i++){
	document.getElementById(i).onclick = function(){
		
		console.log(i);
	}
}
for(var i=0;i<3;i++){
	document.getElementById(i).onclick = someFunction(i);
}
var cars = [];
for(var i=0;i<3;i++){
	cars.push(someFunction("some"+i));
}
cars[1]();

// for an event.
//for(var i=0;i<3;i++){
//	setInterval(someFunction(i),3000);
//}


var run= function(arrayOfElements){
	var i=-(arrayOfElements.length -1);
	return function(){
		i+=arrayOfElements.length -1;
		return arrayOfElements[i%arrayOfElements.length];
	}
};
var f = run([4,8,1,3,5,6,7,9]);
for(var i=0;i<12;i++){
	console.log(f());
}