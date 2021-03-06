var correctMessage = "Correct!";
var incorrectMessage = "Sorry! Wrong Answer!";
var timeupMessage = "Times up!"
var question;
var validAnswer;
var userGuess;
var intervalId = 0;
var questionChoice;
var rightAnswers = 0;
var wrongAnswers = 0;
var number = 15;
var questionNumber = 1;

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
    run();
    if (questionNumber <= 5){
        questionChoice = myQuestions[Math.floor(Math.random() * 5)]
        $("#questions").text(questionChoice.question);
        $("#optionA").text(questionChoice.answers.optionA);
        $("#optionB").text(questionChoice.answers.optionB);
        $("#optionC").text(questionChoice.answers.optionC);
        validAnswer = questionChoice.correctAnswer;
        questionNumber++;
    } 
    
};

function run() {
    number = 15;
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#timeRemaining").html("<h2> Time Remaining: " + number + "</h2>");
    if (number === 0 && questionNumber > 5){
        $("#messageArea").text("Number of Correct Answers: " + rightAnswers + "\n" +
        "Number of Incorrect Answers: " + wrongAnswers);
        questionNumber = 1
        return;
    } else if (number === 0 && questionNumber <= 5){
        $("#messageArea").text(timeupMessage);
        clearInterval(intervalId);
        return;
    }

}


function pickAnswer(arg){
    userGuess = arg;
    if (userGuess === validAnswer){
        questionNumber++;
        console.log(questionNumber);
        $("#messageArea").text(correctMessage);
        rightAnswers++;
        number = 15;
        clearInterval(intervalId);
        run();
        askQ();
    } else {
        questionNumber++;
        $("#messageArea").text(incorrectMessage);
        wrongAnswers++;
        number = 15;
        clearInterval(intervalId);
        run();
        askQ();
    }
}

askQ();

