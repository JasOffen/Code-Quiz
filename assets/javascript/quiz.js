//Variable Declarations
var startBtn = document.getElementById('start');
var subBtn = document.getElementById('submit')
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('currentQuestion');
var userInputEl = document.getElementById('formHidden');
var submitButtonEl = document.getElementById('buttonSpan');
var isCorrectEl = document.getElementById('isCorrect');


var questions = ["What does HTML stand for?", "What does CSS Stand for?", "What is a .js file?", "what is the <body> of a page?", "when calling for CSS styles you call them by their?", "Im getting an error when using this code 'getElementById' what should it be instead?"]
questionAnswers = ["hyper text markup language", "cascading style sheets", "javascript", "Where the content goes", "selectors", "document.getelementbyid"];
var wordCount = 0;
var userInput = document.getElementById("submit");
var isRetry = false;
var isCorrect = null;
var timeLeft = 100;
var questionsFalse = 0;
var initials = "";



//Countdown function
function countdown() {
    //Variable Declarations
    timeLeft = 100;
    //Set initial question.
    questionEl.textContent = questions[0];
    //make submit button visible
    if (isRetry == false) {
        document.getElementById("Button-hidden").id = "Button-visible"
        document.getElementById("formHidden").id = "formVisible"
        document.getElementById("start").id = "Button-hidden"
    } else {
        submitButtonEl.textContent = "Next Question"
        questionsFalse = 0;
    }
    //SetInterval function for timer
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft;
            //console.log(timeLeft);
        } else {
            //Stop the timer once it hits 0
            clearInterval(timeInterval);
        }
        if (timeLeft < 0) {
            wordCount = 5;
            nextQuestion();
        }

    }, 1000);
    subBtn.onclick = nextQuestion;

    //Cycles through the question
    function nextQuestion() {
        wordCount++
        userInput = document.getElementById("formVisible").value;
        //console.log(questionAnswers[0])
        //console.log(userInput)
        if (userInput == questionAnswers[wordCount - 1]) {
            isCorrect = true;
            isCorrectEl.textContent = "Correct!"
        } else {
            timeLeft = timeLeft - 15;
            timerEl.textContent = timeLeft;
            isCorrect = false;
            isCorrectEl.textContent = "Incorrect"
            questionsFalse++;
        }
        questionEl.textContent = questions[wordCount];
        if (wordCount > 5) {
            if (timeLeft < 0) {
                questionEl.textContent = "You answered all the questions with a score of 0! with " + questionsFalse + " questions wrong";
                timeLeft = 15;
            } else {
                questionEl.textContent = "You answered all the questions with a score of " + timeLeft + "! with " + questionsFalse + " questions wrong";
            }
            submitButtonEl.textContent = "Enter you initials and Try again"
            initials = document.getElementById("formVisible").value;
            localStorage.setItem("Initials", initials)
            localStorage.setItem("Score", timeLeft)
            clearInterval(timeInterval);
        }
        //console.log('wordCount is equal to ' + wordCount);
        if (wordCount == 7) {
            wordCount = 0;
            isRetry = true;
            countdown();
        }
        //console.log(userInput);
        userInputEl.value = "";
    }

}

startBtn.onclick = countdown;
