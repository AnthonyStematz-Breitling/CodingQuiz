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
//question variables
var problem = document.querySelector("#question");
var optionA = document.querySelector("#choice-a");
var optionB = document.querySelector("#choice-b");
var optionC = document.querySelector("#choice-c");
var optionD = document.querySelector("#choice-d");
var result = document.querySelector("#result-message")
var quiz = [
    {
        question: "Select the correct syntax below...",
        choiceA: "var.setAttribute:style = 'display:none",
        choiceB: "document.SetAttribute('style', 'display:none')",
        choiceC: "document.style.display:none",
        choiceD: 'document.setAttribute("style", "display:none")',
        correct: "D"
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
];
var answer = "";
console.log(answer);
var seconds = 60;

startButton.addEventListener("click", function(){
    page1.setAttribute("style", "display:none");
    console.log(page1);
    page2.setAttribute("style", "display:block");
    countdown()
});

function countdown(){
    seconds = 30;
    var timerInterval =setInterval(function(){
    seconds--;
    clock.textContent = seconds;
    console.log(seconds);
    if(seconds === 0){
        clearInterval(timerInterval);
        page2.setAttribute("style", "display:none");
        console.log(page2);
        timedOut.setAttribute("style", "display:block"); 
    }
  }, 1000);
}

var currentquestion = 0;
var q = quiz[currentquestion];
console.log(currentquestion);

for(i=0; i<quiz.length; i++){
    result.textContent = "";
    displayQuestion();
    console.log(page2);
    currentquestion++
}

optionA.addEventListener("click", function(){
    answer = "A";
    console.log(answer);
    answerCheck();
})
optionB.addEventListener("click", function(){
    answer = "B";
    answerCheck();
})
optionC.addEventListener("click", function(){
    answer = "C";
    answerCheck()
})
optionD.addEventListener("click", function(){
    answer = "D";
    answerCheck();
})

function answerCheck(){
    console.log(answer);
    if (q.correct === answer){
        result.textContent = "correct";
    }
    else{
        result.textContent = "wrong";
        seconds - 5;
    }
}

function displayQuestion(){
    result.textContent = "";
    problem.textContent = q.question;
    optionA.textContent = q.choiceA;
    optionB.textContent = q.choiceB;
    optionC.textContent = q.choiceC;
    optionD.textContent = q.choiceD;
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
