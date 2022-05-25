let startBtn = document.querySelector(".start-button");
let timeLeft = 45;
let winCounter = 0;
let lossCounter = 0;
let currentQuestion = 0;



// Make questions appear one by one 
function generateQuiz() {
    // What is the first thing?
    // A question should appear with four answers to be chosen

    let questionArray = questions[currentQuestion];

    // Display question one and the four answers
    let quizBox = document.body.querySelector('.quizBox');
        // Answer question one
        quizBox.textContent = questionArray.question;
    // for loop to show answers
    for (let i = 0; i < questionArray.options.length; i++) {
        let button = document.createElement('button');
        // The answers must be selectable
        button.textContent = questionArray.options[i];
        quizBox.append(button);
        button.addEventListener('click', function () {
            currentQuestion++;
            generateQuiz();
            // When you click an answer, next question shows
            // If you are wrong, then minus 5 seconds off timeLeft
        });
    }
}

// Timer interval
function startTimer(time){
    let timerInterval = setInterval(timer, 1000);
    function timer(){
        if (timeLeft === 1){
            clearInterval(timerInterval);
        }
        timeLeft--; 
        // DOM
    let timerSeconds = document.querySelector('.timerSeconds');
        timerSeconds.textContent = timeLeft;
        console.log (timeLeft);
    }
}

function startQuiz() {
    startTimer();
    generateQuiz();    
}

startBtn.addEventListener("click", startQuiz);