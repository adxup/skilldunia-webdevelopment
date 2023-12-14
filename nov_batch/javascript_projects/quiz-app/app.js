let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(optionIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.options[optionIndex] === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }

  updateScore();
  updateNextButton();
}

function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}

function endQuiz() {
  alert(`Quiz completed. Your final score is ${score}`);
  nextButton.style.display = "none"; // Hide the Next Question button at the end
}

function updateNextButton() {
  if (currentQuestionIndex === questions.length) {
    nextButton.style.display = "none"; // Hide the Next Question button if all questions are completed
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

startQuiz();
