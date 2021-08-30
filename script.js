// variables-----------------------------------------------//

var popQuizEl = document.querySelector("pop-quiz");
var introEl = document.querySelector("intro");

var startGame = document.querySelector("pop-quiz");
var startBtnEl = document.getElementById("start-button");
var exitBtnEl = document.getElementById("exit-button");
var questionsEl = document.getElementById("questions");
var choiceBtnEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var highscoreEl = document.getElementById("highscores");

var endQuiz = false;
var timer;
var timerCount;
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
function startGame(event) {
    timer = 60;
    event.preventDefault();
    startPageEl.setAttribute();
    popQuizEl.setAttribute();
    startBtnEl.disabled = true;
    startTimer();
    runGame();
}

function showQuestions(quizContainer) {
    button,addEventListener("click", selectAnswer);
    answerButt
}

// start timer 
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          
          console.log("works");
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
       
      }
    }, 1000);
   }

startBtnEl.addEventListener("click", startGame);

var resetButton = document.querySelector("exit-button");

function resetGame() {
}
// Attaches event listener to button
exitEl.addEventListener("click", resetGame);

