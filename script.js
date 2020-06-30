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
var score = document.querySelector("#quiz-results");
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
        question: "2",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "3",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "4",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "5",
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
var correct = 0; 

startButton.addEventListener("click", function(){
    page1.setAttribute("style", "display:none");
    console.log(page1);
    page2.setAttribute("style", "display:block");
    countdown()
});

function countdown(){
    seconds = 60;
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

console.log(quiz[currentquestion]);
displayQuestion();

optionA.addEventListener("click", function(){
    answer = "A";
    console.log(answer);
    answerCheck();
    currentquestion++
    displayQuestion();
})
optionB.addEventListener("click", function(){
    answer = "B";
    answerCheck();
    currentquestion++
    displayQuestion();
})
optionC.addEventListener("click", function(){
    answer = "C";
    answerCheck()
    currentquestion++
    displayQuestion();
})
optionD.addEventListener("click", function(){
    answer = "D";
    answerCheck();
    currentquestion++
    displayQuestion();
})
quizOver();

function displayQuestion(){
    console.log(quiz[currentquestion]);
    result.textContent = "";
    problem.textContent = quiz[currentquestion].question;
    optionA.textContent = quiz[currentquestion].choiceA;
    optionB.textContent = quiz[currentquestion].choiceB;
    optionC.textContent = quiz[currentquestion].choiceC;
    optionD.textContent = quiz[currentquestion].choiceD;
}

function answerCheck(){
    console.log(answer);
    if (quiz[currentquestion].correct === answer){
        result.textContent = "correct";
        correct++;
    }
    else{
        result.textContent = "wrong";
        seconds - 5;
    }
}


function quizOver(){
    if(currentquestion>quiz.length-1){
        page2.setAttribute("style", "display:none");
        console.log(page2);
        page3.setAttribute("style", "display:block");
        score = correct+"/5";
    }
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
