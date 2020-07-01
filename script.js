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
var userIntials = document.querySelector("#intials");
var extraTime =document.querySelector("#time-leftover")
var score = document.querySelector("#quiz-results");
//variables for high score portion
var page4 = document.querySelector("#high-scores");
var scoreList = document.querySelector("#intials-list");
var restartButton = document.querySelector("#restart");
//question variables
var problem = document.querySelector("#question");
var optionA = document.querySelector("#choice-a");
var optionB = document.querySelector("#choice-b");
var optionC = document.querySelector("#choice-c");
var optionD = document.querySelector("#choice-d");
var result = document.querySelector("#result-message");
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
        question: "What does Math.random() do?",
        choiceA: "picks a random number between 0 and infinity",
        choiceB: "picks a random number between 0 and 1",
        choiceC: "picks a random number between 0 and 100",
        choiceD: "picks a random negative number",
        correct: "B"
    },
    {
        question: "What does event.stopPropagation do?",
        choiceA: "stops political progpaganda",
        choiceB: "stops all event function",
        choiceC: "prevents events, such as click and keydown from bubbling and activating other events in the DOM.",
        choiceD: "causes bubbling to create a chain reaction from a single click event",
        correct: "C"
    },
    {
        question: "What is NOT a git command?",
        choiceA: "git pull",
        choiceB: "git branch",
        choiceC: "git return",
        choiceD: "git commit",
        correct: "C"
    },
    {
        question: "Bootstrap's grid system has what three classes?",
        choiceA: "container, row, column",
        choiceB: "box, position-y, position-x",
        choiceC: "container, section, box",
        choiceD: "body, row, column",
        correct: "A"
    },
];
var answer = "";
console.log(answer);
var seconds = 61;
var correct = 0; 
var currentquestion = 0;
var timerInterval;

startButton.addEventListener("click", function(){
    page1.setAttribute("style", "display:none");
    console.log(page1);
    page2.setAttribute("style", "display:block");
    correct = 0;
    currentquestion = 0;
    countdown();
    displayQuestion();
});

function countdown(){
    seconds = 60;
    timerInterval = setInterval(function(){
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

optionA.addEventListener("click", function(){
    answer = "A";
    console.log(answer);
    answerCheck();
    currentquestion++
    setTimeout (function(){ displayQuestion();}, 750);
})
optionB.addEventListener("click", function(){
    answer = "B";
    answerCheck();
    currentquestion++
    setTimeout (function(){ displayQuestion();}, 750);
})
optionC.addEventListener("click", function(){
    answer = "C";
    answerCheck()
    currentquestion++
    setTimeout (function(){ displayQuestion();}, 750);
})
optionD.addEventListener("click", function(){
    answer = "D";
    answerCheck();
    currentquestion++
    setTimeout (function(){ displayQuestion();}, 750);
})

function displayQuestion(){
    console.log(quiz[currentquestion]);
    quizOver();
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
        result.textContent = "Correct!";
        correct++;
        console.log(correct);
    }
    else{
        result.textContent = "Wrong!";
        seconds = seconds - 4;
    }
}


function quizOver(){
    if(currentquestion>quiz.length-1){
        clearInterval(timerInterval);
        page2.setAttribute("style", "display:none");
        console.log(page2);
        page3.setAttribute("style", "display:block");
        score.textContent = correct+"/5";
        extraTime.textContent = seconds + " " + "seconds leftover";
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
    var li = document.createElement("li");
    var name = userIntials.value;
    li.innerHTML = name + " " + correct+"/5";
    console.log(li);
    scoreList.append(li);
})

restartButton.addEventListener("click", function(){
    page4.setAttribute("style", "display:none");
    console.log(page4);
    page1.setAttribute("style", "display:block");
})
