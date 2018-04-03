var isPrime = function(number){
	//Prompt the user to input a whole number.Since the use has to be prompted atleast once we could use the do while loop.
	
	if (number <= 1 ){
		return false
	}
	else if( number == 2){
		return true;
	}else{
		var squareRoot = Math.floor(Math.sqrt(number));
		var i = 2; 
		while(i<=squareRoot){
			if (number % i == 0){
				return false;
			}
			i++;
		}
		return true;
	}
	
}

var countPrime = function(){
	var userInput;
	do{
		userInput = parseInt(prompt("Enter the number to find number of primes"));
	}
	//Keep Prompting until the user enters a whole number
	//Note : the parseInt function returns NAN if it is unable to parse hence we could use that as well using the function isNAN()
	while(!Number.isInteger(userInput));
	var i =1;
	var count = 0;
	var primes= '';
	while(i < userInput){
		if (isPrime(i)){
			count ++;
			primes += i +" ";
		}
		i++;
	}
	document.getElementById("primecount").innerHTML = "The total number of primes smaller than " +userInput +" is "+ count + "<br/>" + primes;
	 
}

countPrime();