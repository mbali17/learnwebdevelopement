var phone = function(make,model,warranty){
// This way of setting the value would allow anybody to set any value.Hence we can add setters and getters to add or get value.
//	this.make = make;
//	this.model = model;
//	//We can have a fallback value if the value passed is not passed.
//	this.warranty =  warranty || 12;
	this.setMake(make);
	this.setModel(model);
	this.setWarranty(warranty);
}

phone.prototype={
	setMake : function(make){
		this.make = make;
	},
	setModel: function(model){
		this.model = model;
	},
	setWarranty:function(warranty){
		this.warranty = warranty;
	},
	getMake : function(){
		return this.make;
	},
	getModel: function(){
		return this.model;
	},
	getWarranty:function(){
		return this.warranty ;
	}
}
var myPhone = new phone("Apple","Iphone6",22);
console.log(myPhone);
//Even after having the setters and getters to set,get value the user can access the properties using the object directly.
myPhone.setWarranty(33);

//Next we see how we can avoid setting of arbitrary values using closures.
/*var someOtherPhone = function(newMake,newModel,newWarranty){
	var make,localmodel,warranty;
	this.setModel(newModel);
}
someOtherPhone.prototype.setModel = function(model){
	this.localmodel= model;
}

var myOtherPhone = new someOtherPhone("oneplus","oneplust",12);
console.log(myOtherPhone);
console.log(myOtherPhone.localmodel);*/
// Following is the way to hide properties and methods using closure but, this is not efficient because it consumes a lot of memory i,e for each object created using the constructor there would be all the methods created.
var someOtherPhone = function(newMake,newModel,newWarranty){
	//Private properties.
	var make,model,warranty;
	//private methods 
	function isValidWarranty(x){
		return x>0
	}
	//privileged methods: since they have access to the properties of the object.
	this.setMake = function(){
		make = newMake;
	},
	this.setModel= function(){
		model = newModel;
	},
	this.setWarranty=function(){
		warranty = newWarranty;
	},
	this.getMake = function(){
		return make;
	},
	this.getModel = function(){
		return model;
	},
	this.getWarranty = function(){
		return warranty ;
	}
	
	this.setMake(newMake);
	this.setModel(newModel);
	this.setWarranty(newWarranty);
};
var myNewPhone = new someOtherPhone("oneplus","oneplust",12);
// This creates a new property but does not manipulate the original value.
myNewPhone.model = "someOtherModelqwq";
console.log(myNewPhone.getModel() );

//USing IIFE to declare private  static methods and variables.

var iffePhone = function(){
	var numberOfPhones = 5;
	//private static methods 
	function isValidWarranty(x){
		return x>0
	}
	var someOtherPhone = function(newMake,newModel,newWarranty){
	//Private properties.
	var make,model,warranty;
	
	//privileged methods: since they have access to the properties of the object.
	this.setMake = function(){
		make = newMake;
	},
	this.setModel= function(){
		model = newModel;
	},
	this.setWarranty=function(){
		warranty = newWarranty;
	},
	this.getMake = function(){
		return make;
	},
	this.getModel = function(){
		return model;
	},
	this.getWarranty = function(){
		return warranty ;
	}
	
	this.setMake(newMake);
	this.setModel(newModel);
	this.setWarranty(newWarranty);
};
}();