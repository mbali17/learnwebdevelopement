/*
Object prototype is a property of the object, which is the instance of the "Object" class all the objects created using the literal notation or the object constructor or the construcor are going to have the property prototype(__proto__)
*/

var car = {
	make:"Audi",
	model:"Q7"
};

//The __proto__ can be used print the prototype of the object but it is recommended not to use this property.
console.log(car.__proto__);

// The prototype of the object created using object constructor also has the same prototype. While the object created using the constructor created by the user the prototype consists of the constructor and __proto__ property
var phone = function(make,model,warranty,color){
	this.make = make,
	this.model = model,
	this.warranty = warranty,
	this.color = color
}

var myPhone = new phone("Apple","IphoneSE",12,"gold");
console.log(myPhone.__proto__);
//Proto type chain: As we know an object has property called prtotype and is the super classs of all the objects created in javascript. Now if we want certain properties and methods to be inherritted from other object then we use inheritence in other words if we assign an object prototype of one object to another the inheriting object gets the property and methods from the parent.
var genericPhone = {
	make : "someMake",
	model : "someModel",
	warranty: 12
}

var phone1={
	make:"Apple",
	model:"Iphone 6",
	color:"gold",
	warranty:12,
	//Whenever this method is called from a child class it adds the warranty property to the current object.
	extendWarranty : function(noOfMonths){
		this.warranty+=noOfMonths
	}
}
phone1.__proto__ = genericPhone;
console.log(phone1);
var phone2={
	make:"motorala",
	model:"g3"
}
// THis allows the properties and methods created in phone1 to be extended to the object phone2.The Properties extended are present under the proto
phone2.__proto__ = phone1;
console.log(phone2);
//When certain property is accessed using the object and if the property is not present in the current object.JS traverses the prototype tree to find the property.This is called prototype chain. The number of prototypes in a given object is how deep the inheritance is nested.
console.log(phone2.warranty);

//The other way to define object inheritance is to use the create method of the object class. this creates an empty object initially with all the properties and methods inheritted by the class.
var someOtherPhone = Object.create(genericPhone);
console.log("using object create");
console.log(someOtherPhone);

//The properties of the object can also be extended by adding the properties of the parent class to the prototype of the child class.But, this method is inefficient as the number of properties and methods added to the constructor. The second method could be to add the helper method which is set to the new instance of the parent class.But, the issue with this method is that methods defined in the prototype of the parent class are not inheritted and only the properties defined in the constructor are inherited.The third method is to set the prototype of the child class to the prototype of the parent.But, using this method the constructor of the sub class is lost and we would have to add it separately. Following code demo's each of these methods.

var car = function(make,model,warranty){
	this.make = make;
	this.model = model;
	this.warranty = warranty;
	this.extendWarranty = function(duration){
		this.warranty+=duration;
	}
}

var audi=function(make,model){
	this.make = make;
	this.model = model;
}

var myCar = new audi("Audi","A6");
console.log(myCar instanceof audi);//true
console.log(myCar instanceof car);//false, because they are not inherited.
//method one add properties to the child.
audi.prototype.warranty = 13;
audi.prototype.extendWarranty = function(duration){
	this.warranty+=duration;
}
//method 2: using the helper method which is assigned the constructor of the parent. We know that this method only inherits the properties defined in the constructor. if there are any properties and methods defined outside the constructor in the prototype it is not inherited 
audi.prototype.helper = car;
audi.prototype.helper("Audi","Q7",6);

//method3: assign a new instance  of the parent to the child prototype.
audi.prototype = new car("Audi","Q7",6);// This would lose the constructor property defined in the child prototpye. To overcome this we can re-assign the constructor
audi.prototype.constructor = audi;

//Custom method extend which takes in the parameter child class,parent class and inherits the properties and method using mrthod3 
function extendClass(parentClass,childClass){
	childClass.prototype = new parentClass();
	childClass.prototype.constructor =  childClass;
}
var toy1 = function(name,age,cost){
	this.name = name;
	this.age = age;
	this.cost = cost;
}

var toy2 = function(model){
	this.model = model;
}
var myToy1 = new toy1();
var myToy2 = new toy2();
augment(toy2,toy1);
//Class augmentation : Using the prototype of the object only one class can be extended and if there is a need to extend two classes at a time we can use augmentation where we add the properties present in the parent class to the child class. This functionlaity is not present in the language built in hence we would write a function to achieve this.
function augment(recievingClass,givingClass){
	// We would have to create a new object because the prototype of the object has only the properties and methods defined in the prototype and not the once defined in the constructor.
	var tempGivingClass = new givingClass();
	// Iterate through the properties present in the constructor as well as the prototype.
	for(var i in  tempGivingClass){
		//This is to check only to add the properties defined in the constructor.similarly we can add conditions like if the recieving class has the property being added etc.
		if(tempGivingClass.hasOwnProperty(i)){
			//To add a propety and to interpret the passed value as the value and not property we use the bracket notation
			recievingClass.prototype[i]= tempGivingClass[i];
		}
	}
}
//Note:When ever a property is requested the property is checked if it is present in the object anf if not present then it is checked in the prototype.

// Cloning: This is based on the object.create method which takes an object and return an empty object as the clone of the passed object.
function clone(object){
	//An empty contstructor
	var objectToReturn = function(){
		
	}
	objectToReturn.prototype = object;
	return new objectToReturn();
}

var someToy = clone(toy1);