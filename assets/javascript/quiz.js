//Variable Declarations
var startBtn = document.getElementById('start');
var subBtn = document.getElementById('submit')
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('currentQuestion');
var message =
    'Question 1,Question 2,Question 3,Question 4,Question 5,Question 6,';
var words = message.split(',');
var wordCount = 0;



//Countdown function
function countdown() {
    //Variable Declarations
    var timeLeft = 100;
    //Set initial question.
    questionEl.textContent = "This is a question?"
    //make submit button visible
    document.getElementById("Button-hidden").id = "Button-visible"
    document.getElementById("start").id = "Button-hidden"
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
            questionEl.textContent = "You answered all the questions with a score of " + timeLeft + "!";
            document.getElementById('Button-visible').id = 'Button-hidden'
            clearInterval(timeInterval);
        }
        console.log('wordCount is equal to ' + wordCount);
        wordCount++;
    }

}

startBtn.onclick = countdown;
