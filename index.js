
var readlineSync = require("readline-sync");
var score = 0;
var username = readlineSync.question("Enter your name");
console.log("welcome" + username + " do you know mukesh");

function play(question, answer) {
  var username = readlineSync.question(question);

  if (username === answer) {
    console.log("right");
    score++;
  } else {
    console.log("wrong");
  }
  console.log("current score:", score);
  console.log("++++++++++++++++++++++++++++");
}

var questions = [
  {
    question: "which is best country in the world?",
    answer: "india",
  },
  {
    question: "tell me my name ?",
    answer: "mukesh",
  },
  {
    question: "tell my my age ?",
    answer: "22",
  },
  {
    question: "tell me my father name?",
    answer: "haribhai",
  },
  {
    question: "tell me prime minister of india?",
    answer: "narendra modi",
  },
];

// play(questions[0].question, questions[0].answer);
// play(questions[1].question, questions[1].answer);

for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}

// 15
console.log("this is final score", score);
