/* Trivia Game
5 total questions
NBA themed
Questions will live in object literals with the correct answer outsiude of the question 

You'll create a trivia game that shows only one question until the player answers it or their time runs out.
If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
The scenario is similar for wrong answers and time-outs.
If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

- Will need element to show question on page.
- will need click function to accept user click
- How to relate user click to correct answer?
    - Perhaps if for each question there will be a click event for each answer
- Logic: if id of clicked answer === correctAnswer, question is correct else questions is wrong

*/
var correctMessage = "Correct!";
var incorrectMessage = "Sorry! Wrong Answer!";
var timeupMessage = "Times up!"
var question;
var validAnswer;
var userGuess;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;
var number = 15;

const myQuestions = [
  {
    question: "How long is a regulation NBA game?",
    answers: {
      optionA: "40 minutes",
      optionB: "48 minutes",
      optionC: "60 minutes"
    },
    correctAnswer: "optionB"
  },
  {
    question: "How many seconds does an NBA team have to shoot the ball?",
    answers: {
      optionA: "30 seconds",
      optionB: "10 seconds",
      optionC: "24 seconds"
    },
    correctAnswer: "optionC"
  },
  {
    question: "Wilt Chamberlain once scored 100 points in a game. Who has the second-highest point total in a game?",
    answers: {
      optionA: "Kobe Bryant",
      optionB: "LeBron James",
      optionC: "Devin Booker",
    },
    correctAnswer: "optionA"
  },
  {
    question: "Which NBA team has the most titles?",
    answers: {
      optionA: "The Chicago Bulls",
      optionB: "The Los Angeles Lakers",
      optionC: "The Boston Celtics",
    },
    correctAnswer: "optionC"
  },
  {
    question: "What former player was the inspiration for the NBA logo?",
    answers: {
      optionA: "Elgin Baylor",
      optionB: "Jerry West",
      optionC: "Wilt Chamberlain",
    },
    correctAnswer: "optionB"
  }
];

function askQ(){
    question = myQuestions[Math.floor(Math.random() * 6)]
    $("#questions").text(question.question);
    $("#optionA").text(question.answers.optionA);
    $("#optionB").text(question.answers.optionB);
    $("#optionC").text(question.answers.optionC);
    validAnswer = question.correctAnswer;
    run();
};

function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#timeRemaining").html("<h2> Time Remaining: " + number + "</h2>");

    if (number === 0) {
        stop();
        $("#guessArea").text(timeupMessage);
        setTimeout(askQ, 5000);
    }
}

function stop() {
    clearInterval(intervalId);
}

function pickAnswer(arg){
    userGuess = arg;
    if (userGuess === validAnswer){
        $("#questionArea").html(correctMessage);
        setTimeout(askQ, 5000);
    } else {
        $("#questionArea").html(incorrectMessage);
        setTimeout(askQ, 5000);
    }
}

askQ();

// Step 1: Display start button
//      - Perhaps use innerHTML tag for entire div
// Step 2: Display questions and answers and timer - Each question has 15 seconds
    // If question is not answered in 15 seconds display times up message and show correct answer
// Step 3: After an answer is clicked or time runs out, show either the correct message, incorrect message or
// time up message. All three messages will display for 4 seconds. Add 1 to applicable category
// Step 4: New question populate
// Step 5: Show number of questions correct. number of questions wrong and restart button that will 
// call original function

// function ready(fn) {
//     if ( document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//       // if the document is ready run our init function
//       init();
//     } else {
//       // if the document isn't ready, listen for when it is and then run our init function
//       document.addEventListener("DOMContentLoaded", init);
//     }
// };

// function init(){
//     // setup all of your listeners here so that they are only added once
//     var startButton = document.getElementById("startButton");
//     startButton.addEventListener("click", startGame);
// };

