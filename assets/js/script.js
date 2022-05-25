let startBtn = document.querySelector("#start-button");
let replayBtn = document.querySelector("#replay-button")
let timeLeft = 45;
let score = 0;
let currentQuestion = 0;
let wins = 0;
let losses = 0;

// Make questions appear one by one 
function generateQuiz() {
    // Question appears with four answers in buttons to be chosen
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
            // If 
            if (event.target.innerHTML === questionArray.answer) {
                score++;
                console.log(score);
            } else {
                console.log('Incorrect!');
                timeLeft -=5;
            } 

            // then win condition 
            if (currentQuestion === questions.length) {
                var name = prompt('Enter your name', 'someName');
                if (name != null && name != "") {
                    alert("Your name is " + name + " and your score is " + score);
                    document.getElementById('replay').style.display = "block";
                }
            }
            // Lose condition = time reaches zero and a replay button appears
            if (timeLeft <= 0) {
                alert("You lose!");
                document.getElementById('replay').style.display = "block";
            }

            currentQuestion++;
            generateQuiz();
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
    }
}

function startQuiz() {
    generateQuiz();
    startTimer();
}

startBtn.addEventListener("click", startQuiz);
// Replay button
replayBtn.addEventListener("click", startQuiz);