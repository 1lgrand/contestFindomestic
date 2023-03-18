let currentQuestion = 0;
let score = 0;
let quizContainer = document.getElementById("quiz");
let questionContainer = document.getElementById("question");
let answerContainer = document.getElementById("answers");
let submitButton = document.getElementById("submit");
let questions = [];

// Carica le domande dal file JSON
fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

// Mostra la domanda corrente e le relative risposte
function showQuestion() {
  let question = questions[currentQuestion];
  questionContainer.innerHTML = question.question;
  answerContainer.innerHTML = "";
  for (let i = 0; i < question.answers.length; i++) {
    let answer = question.answers[i];
    let button = document.createElement("button");
    button.innerHTML = answer;
    button.addEventListener("click", function() {
      if (answer === question.correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });
    answerContainer.appendChild(button);
  }
}

// Mostra il punteggio finale
function showScore() {
  questionContainer.innerHTML = "Hai totalizzato " + score + " punti su " + questions.length;
  answerContainer.innerHTML = "";
  submitButton.style.display = "none";
}