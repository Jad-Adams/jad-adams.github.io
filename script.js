const questionInput = document.getElementById(`question-input`);
const askBtn = document.querySelector(`.ask-btn`);
const answerText = document.querySelector(`.answer`);
const userQuestion = document.querySelector(`.user-question`);
const thinkingText = document.querySelector(`.thinking`);

// Submitting question
askBtn.addEventListener(`click`, function () {
  questionAnswer();
});

document.addEventListener(`keydown`, function (keyPress) {
  if (keyPress.key === `Enter` && questionInput.value) {
    questionAnswer();
  }
});

// Reset form
questionInput.addEventListener(`click`, function () {
  init();
});

function init() {
  userQuestion.textContent = ``;
  thinkingText.textContent = ``;
  answerText.textContent = ``;
}

// Evaluating question
function questionAnswer() {
  if (questionInput.value) {
    //storing question & removing punctuation
    let question = questionInput.value.replace(/[^\w\s]|_/g, "");

    //the decider machine
    let secretNumber = Math.trunc(Math.random() * 2 + 1);

    removeFocus();

    userQuestion.textContent = `Your question is "${question}?"`;

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

    questionInput.value = ``;
    return question;
  } else {
    alert(`You must ask the machine a question`);
  }
}

function removeFocus() {
  questionInput.blur();
}
