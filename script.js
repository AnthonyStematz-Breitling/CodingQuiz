//variables for start screen
var startButton = document.querySelector("#start-quiz");
var page1 = document.querySelector("#start-page");
//variables for question portion
var page2 = document.querySelector("#multiple-choice");
var clock = document.querySelector("#timer");
//variables in case of timed out
var timedOut = document.querySelector("#times-up");
var scoreButton = document.querySelector("#display-score");
// variables for personal score portion
var page3 = document.querySelector("#score");
var recordScores = document.querySelector("#document-score");
var intials = document.querySelector("#intials");
//variables for high score portion
var page4 = document.querySelector("#high-scores");
var scoreList = document.querySelector("#initials-list");
var restartButton = document.querySelector("#restart");

var seconds = 30;

startButton.addEventListener("click", function(){
    page1.setAttribute("style", "display:none");
    console.log(page1);
    page2.setAttribute("style", "display:block");
    Countdown()
});

function Countdown(){
    seconds = 30;
    var timerInterval =setInterval(function(){
    seconds--;
    clock.textContent = seconds +"";
    console.log(seconds);
    if(seconds === 0){
        clearInterval(timerInterval);
        page2.setAttribute("style", "display:none");
        timedOut.setAttribute("style", "display:block");
       
    }
  }, 1000);
}

scoreButton.addEventListener("click", function(){
    timedOut.setAttribute("style", "display:none");
    console.log(timedOut);
    page3.setAttribute("style", "display:block");
})

recordScores.addEventListener("click", function(){
    page3.setAttribute("style", "display:none");
    console.log(page3);
    page4.setAttribute("style", "display:block");
    var list = document.createElement("li");
    list.innerText = intials;
    scoreList.append(list);
})

restartButton.addEventListener("click", function(){
    page4.setAttribute("style", "display:none");
    console.log(page4);
    page1.setAttribute("style", "display:block");
})
