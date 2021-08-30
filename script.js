// variables-----------------------------------------------//

var popQuizEl = document.querySelector("pop-quiz");
var introEl = document.querySelector("intro");

var startGame = document.querySelector("pop-quiz");
var startBtnEl = document.getElementById("start-button");
var exitBtnEl = document.getElementById("exit-button");
var submitBtn = document.getElementById("submit");
var questionsEl = document.getElementById("questions");
var choiceBtnEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var highscoreEl = document.getElementById("highscores");
var submitEl = document.getElementById("submit");
var inputEl = document.getElementById("initials")

var endQuiz = false;
var timer;
var timerCount;
var answer = 0;
var score = 0;
var scoreCount = 0;
var answer = "";
var result = "";
// var highscore = [];


// questions variable array-----------------------------------------------------
var questions =[
    {
        text: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        text: "The condition in an if / else statement is enclosed within ______.",
        options:["quotes", "curly braces", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        text: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        text: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["quotes", "curly braces", "parentheses", "commas"],
        answer: "quotes"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "console.log", "for loops"],
        answer: "console.log"
    },
    
]


// start game----------------------------------------
function startGame(questions) {
     // If no more questions, end quiz
 if (current === questions.length || endQuiz) {
    if (timeLeft > 0) {
    score = timeLeft;
    } else {
    score = 0;
    }
    quizOver();
    return;
    }
}
// questions -------------------------------------------
function showQuestions() {
    text = document.createElement('h2');
     options = document.getElementById('ul');
     questionEl.textContent = currentQuestion.text;
     quizEl.appendChild(questionEl);
     quizEl.appendChild(choicesEl);
}

// start timer ---------------------------------------------
function startTimer() {
    // Sets timer
    timerEl.textContent = "Time: " + timerCount;
    setInterval(function () {
    timerCount--;
    if (timerCount >= 0) {
    timerEl.textContent = "Time: " + timerCount;
    }
    if (timerCount === 0 || timerCount < 0) {
    endQuiz = true;
    if (endQuiz) {
    quizOver();
    }
    clearInterval(timerCount); //
    }
    }, 1000);
}
   
// answer correct ---------------------------------------
function answerSelected(event) {
    if (event.target.matches('button')) {
    if (event.target.textContent === Questions[answer].correct) {
    timeLeft += 10;
    results.textContent = 'Correct!';
    
    setTimeout(function () {
    results.textContent = '';
    }, 1000);
    } else {
// if chose wrong -------------------------------------
    timeLeft -= 10;
    results.textContent = 'Wrong!';
    
    setTimeout(function () {
    results.textContent = '';
    }, 1000);
    }
    quizEl.innerHTML = '';
    current++;
    runQuiz();
    }
//    console.log("works")
   }


   // Saves highscore and initials 

    function submitEl() {
     (localStorage.getItem("score")) 
        highScores = JSON.parse(localStorage.getItem('score'));
        }
        if (inputEl.value) {
            var initials = inputEl.value;
            var score = {
            initials: initials,
            score: score
            };
            highScores.push(score);
            localStorage.setItem("score", JSON.stringify(scoreCount));
            location.href = 'highscores.html';
            } else {
            alert('You have not entered your initials!');
            };
               
     
// event listeners ----------------------------------------------
startBtnEl.addEventListener("click", startGame);

popQuizEl.addEventListener("click", ChoiceSlected);

submitBtnEl.addEventListener("click", submit);

function resetGame() {
}
// Attaches event listener to button
exitEl.addEventListener("click", resetGame);

