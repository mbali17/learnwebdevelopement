//gloabal variable
var corrrectAnswer;
var isPlaying = true;

//This function starts the timer for a period of 60 sec and decrements the value by one every second.
//once the timer has expired the game over message is shown.
function initiateTimer() {
    var maxTime = 10, gameCounter = setInterval(function () {
        if (maxTime >0) {
            maxTime--;
            document.getElementById('timer').innerHTML = maxTime;
        } else {
            document.getElementById('gameover').style.display = 'block';
            document.getElementById('totalscore').innerHTML = document.getElementById('scorecvalue').innerHTML;
            document.getElementById('timeremaining').style.display = 'none';
            isPlaying=false;
            clearInterval(gameCounter);
        }
    }, 1000);
}
//logic: Randomly place the answer in one of the four options and place the remaining options in the available boxes.
function displayAnswers(answers) {
    if (answers &&  answers.length > 0) {
        var postionForTheAnswer = Math.round(1 + Math.random() * 3);
        document.getElementById('choice' + postionForTheAnswer).innerHTML = answers[0];
        var j = 1,i = 1;
        while(i<=4){
            if (i!=postionForTheAnswer){
                document.getElementById('choice' + i).innerHTML = answers[j];
                j++;
            }
            i++;
        }
    }
}
//Display the element selected by the id.
function show(id){
    document.getElementById(id).style.display = 'block';
}
//hide the element identified by the id.
function hide(id){
    document.getElementById(id).style.display = 'none';
}
//increments the score by one.
function incrementScore(){
    var currentScore = document.getElementById('scorecvalue').innerHTML;
     document.getElementById('scorecvalue').innerHTML =  parseInt(currentScore)+1 ;
}
//Validates the answer,increments score,generate next question and choice.
//TODO:Displaying appropriate messages.
function validateAnswer(choiceSelected){
    if(isPlaying){
        if( parseInt(choiceSelected) === corrrectAnswer){
            hide('wrong');
            show('correct');
            setTimeout(function(){
                hide('correct');
            },1000)
            incrementScore();
            generateQuestionAndAnswer();
        }else{
            console.log("WRONG ANSWER!!!");
            hide('correct');
            show('wrong');
            setTimeout(function(){
                hide('wrong');
            },1000)
        }
    }
}

//logic:Generate two random numbers between 1 and 10;
function generateQuestionAndAnswer(){
    var firstNumber = Math.ceil(Math.random()*10);
    var secondNumber = Math.ceil(Math.random()*10);
    corrrectAnswer = firstNumber*secondNumber;
    var answers = [corrrectAnswer];
    document.getElementById("questionBox").innerHTML=firstNumber + 'X' +secondNumber;
    for(var i=0;i<3;i++){
        answers.push(Math.floor(Math.random()*100));
    }
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
        for (var i = 1;i <= 4;i++){
            document.getElementById("choice"+i).onclick = function(){
                validateAnswer(this.innerHTML);
            };
        }
    }
}

