//help the cashier return the right  change


//Programme input: 

//Amount due
var amountDue = prompt("Amount Due:");
//Amount paid by the customer
var amountPaid = prompt("Amount Paid:");

//parse the input to float and set precision to 2 digits.
amountDue =  parseFloat(amountDue).toFixed(2);
amountPaid = parseFloat(amountPaid).toFixed(2);
//Programme output:

//Print change amount
var change = (amountPaid - amountDue).toFixed(2);
console.log("Amount due :"+amountDue +" Amount Paid: "+amountPaid + " Change: "+change);
//Print change breakdown: notes and coins
var value,note_coin_name,to_return;
//[value,note_coin_name] = [100,"100$ note"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [50,"50$ note"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//
//[value,note_coin_name] = [20,"20$ note"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [10,"10$ note"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [5,"5$ note"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [0.50,"0.50c coin"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [0.10,"0.10c coin"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [.02,"0.02c coin"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//[value,note_coin_name] = [.01,".01c coin"]
//to_return = Math.floor(change/value);
//change = (change%value).toFixed(2);
//to_return>0 ? console.log(note_coin_name + to_return):0;
//
//Improvement 1
var currencyValues = [100,50,20,10,5,0.50,0.10,0.02,0.0];
//for (var i = 0;i< currencyValues.length;i++){
//    to_return = Math.floor(change/currencyValues[i]);
//    change = (change%currencyValues[i]).toFixed(2);
//    var noteOrCoin  = currencyValues[i] < 1 ?" c coin" : " $note";
//    to_return>0 ? console.log(currencyValues[i] + noteOrCoin + to_return):0;
//}
var i = 0;
while(change>0){
    to_return = Math.floor(change/currencyValues[i]);
    change = (change%currencyValues[i]).toFixed(2);
    var noteOrCoin  = currencyValues[i] < 1 ?" c coin" : " $note";
    to_return>0 ? console.log(currencyValues[i] + noteOrCoin + to_return):0;
    i++;
    console.log(i)
}