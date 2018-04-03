(function(){
	//Prompt the user to input a whole number.Since the use has to be prompted atleast once we could use the do while loop.
	var userInput;
	do{
		userInput = parseInt(prompt("Enter the number to find whether it is prime"));
	}
	//Keep Prompting until the user enters a whole number
	//Note : the parseInt function returns NAN if it is unable to parse hence we could use that as well using the function isNAN()
	while(!Number.isInteger(userInput));
	//Refernce https://en.wikipedia.org/wiki/Primality_test#Simple_methods
	if (userInput <= 1 ){
		document.getElementById("results").innerHTML = "The number is not Prime";
	}
	else if( userInput == 2){
		document.getElementById("results").innerHTML = "The number is Prime";
	}else{
		var squareRoot = Math.floor(Math.sqrt(userInput));
//		for (var i =2 ;i <= squareRoot ;i++){
//			if (userInput % i == 0){		
//				document.getElementById("results").innerHTML = "The number is not Prime and it can be divided by "+i;
//				//break, just breaks out of the loop while we want to break out of the function in order to dao that we can use return
//				//break;
//				return;
//		   	}
//		}
//		document.getElementById("results").innerHTML = "The number is Prime";
		var i = 2; 
		while(i<=squareRoot){
			if (userInput % i == 0){
				document.getElementById("results").innerHTML = "The number is not Prime and it can be divided by "+i;
				return;
			}
			i++;
		}
		document.getElementById("results").innerHTML = "The number is Prime";
	}
	
}());

