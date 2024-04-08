const questionInput = document.getElementById(`question-input`);
const askBtn = document.querySelector(`.ask-btn`);
const answerText = document.querySelector(`.answer`);
const userQuestion = document.querySelector(`.user-question`);
const thinkingText = document.querySelector(`.thinking`);

askBtn.addEventListener(`click`, questionAnswer);

document.addEventListener(`keydown`, function (keyPress) {
  if (keyPress.key === `Enter` && questionInput.value) {
    questionAnswer();
  }
});

function questionAnswer() {
  if (questionInput.value) {
    let question = questionInput.value;
    question.toLowerCase();

    let secretNumber = Math.trunc(Math.random() * 2 + 1);

    userQuestion.textContent = `Your question was "${question}?"`;

    function machineThinking() {
      thinkingText.textContent = `The machine is thinking about it`;
    }

    function displayAnswer() {
      if (secretNumber === 1) {
        answerText.textContent = `No.`;
      } else if (secretNumber === 2) {
        answerText.textContent = `Yes.`;
      }
    }

    setTimeout(machineThinking, 1000);
    setTimeout(displayAnswer, 3000);

    return question;
  } else {
    alert(`You must ask the machine a question`);
  }
}
