//Variable Declarations
var startBtn = document.getElementById('start');
var subBtn = document.getElementById('submit')
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('currentQuestion');
var userInputEl = document.getElementById('formHidden');
var submitButtonEl = document.getElementById('buttonSpan');
var isCorrectEl = document.getElementById('isCorrect');


var message =
    'Question 2,Question 3,Question 4,Question 5,';
var words = message.split(',');
questionAnswers = [1, 2, 3, 4, 5];
var wordCount = 0;
var userInput = document.getElementById("submit").submit();
var isRetry = false;
var isCorrect = null;
var timeLeft = 100;
var questionsFalse = 0;



//Countdown function
function countdown() {
    //Variable Declarations
    timeLeft = 100;
    //Set initial question.
    questionEl.textContent = "Question 1"
    //make submit button visible
    if (isRetry == false) {
        document.getElementById("Button-hidden").id = "Button-visible"
        document.getElementById("formHidden").id = "Button-visible"
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
            console.log(timeLeft);
        } else {
            //Stop the timer once it hits 0
            clearInterval(timeInterval);
        }

    }, 1000);
    subBtn.onclick = nextQuestion;

    //Cycles through the question
    function nextQuestion() {
        questionEl.textContent = words[wordCount];
        if (wordCount > words[wordCount]) {
            questionEl.textContent = "You answered all the questions with a score of " + timeLeft + "! with " + questionsFalse + " questions wrong";
            clearInterval(timeInterval);
            wordCount++;
            if (wordCount == 5) {
                submitButtonEl.textContent = "Enter you initials and Try again"
            }
        } else {
            wordCount++;
        }
        console.log('wordCount is equal to ' + wordCount);
        if (wordCount == 6) {
            wordCount = 0;
            isRetry = true;
            countdown();
        }

        if (questionAnswers == 1) {
            isCorrect = true;
            isCorrectEl.textContent = "Correct"
        } else {
            isCorrect = false;
            isCorrectEl.textContent = "Incorrect"
            timeLeft = timeLeft - 15;
            questionsFalse++;

        }
        console.log(userInput);
    }

}

startBtn.onclick = countdown;
