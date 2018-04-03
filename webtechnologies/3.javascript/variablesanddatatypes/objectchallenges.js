function phone(make,model,warranty,color){
	this.make = make;
	this.model = model;
	this.warranty = warranty;
	this.color = color;
	this.endWarranty = function(){
		this.warranty = 0;
	}
}

phone.prototype = {
	extendWarranty: function(x){
		this.warranty+=x;
	}
}
phone.prototype.returnProperties =function(){
	var properties = [];
	var values = [];
	for (var i in this){ 
		if(this.hasOwnProperty(i) && typeof this[i] != "function"){
			properties.push(i);
			values.push(this[i]);
		}
	}
	return [properties,values];
}
var myphone = new phone("Apple","iphone se",12,"gold");
var propertiesAndValues = myphone.returnProperties();
console.log(propertiesAndValues);
// Returning properties and values using object methods
phone.prototype.usingObjectMethods = function(){
	//Object.keys method returns the properties defined in the constructor of the object passed.
	var properties = Object.keys(this); 
	var values = [];
	var currentObject = this; //When iterating the properties using the foreach method of the array the "this" variable refers to the window object since the given function is not attached to any methods.
	properties.forEach(function(key){
		values.push(currentObject[key]);
	});
	return [properties,values];
}

console.log(myphone.usingObjectMethods());

var rerturnProperties = function(obj){
	var properties = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
	var values = [];
	properties.forEach(function(key){
		values.push(obj[key]);
	});
	return [properties,values];
}

console.log(rerturnProperties(myphone));