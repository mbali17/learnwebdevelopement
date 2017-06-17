//This function starts the timer for a period of 60 sec and decrements the value by one every second.
//once the timer has expired the game over message is shown.
function initiateTimer(){
    var maxTime = 60;
    var gameCounter = setInterval(function(){
        if(maxTime >0){
            maxTime--;
            document.getElementById('timer').innerHTML=maxTime;
        }else{
            document.getElementById('gameover').style.display='block';
            clearInterval(gameCounter);
        }
    },1000);
}
function displayAnswers(answers){
    if(answers &&  answers.length>0){
        
       
    }
}
//logic:Generate two random numbers between 1 and 10;
function generateQuestionAndAnswer(){
    var firstNumber = Math.ceil(Math.random()*10);
    var secondNumber = Math.ceil(Math.random()*10);
    var corrrectAnswer = firstNumber*secondNumber;
    var answers = [corrrectAnswer];
    document.getElementById("questionBox").innerHTML=firstNumber + 'X' +secondNumber;
    for(var i=0;i<3;i++){
        answers.push(Math.floor(Math.random()*100));
    }
    console.log("The generate")
    displayAnswers(answers);
}
var startOrResetButton=document.getElementById('startorreset');
startOrResetButton.onclick=function(){
    //Check if the game is played.
    if (startOrResetButton.innerHTML === 'Reset Game'){
        window.location.reload();
    }else{
        //Initiate the game.
        startOrResetButton.innerHTML = 'Reset Game';
        document.getElementById('timeremaining').style.display='block';
        initiateTimer();
        generateQuestionAndAnswer();
    }
}