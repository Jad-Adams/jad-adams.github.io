const questionInput = document.getElementById(`question-input`);
const askBtn = document.querySelector(`.ask-btn`);
const answerText = document.querySelector(`.answer`);
const userQuestion = document.querySelector(`.user-question`);

askBtn.addEventListener(`click`, questionAnswer);

document.addEventListener(`keydown`, function (keyPress) {
  if (keyPress.key === `Enter`) {
    questionAnswer();
  }
});

function questionAnswer() {
  let question = questionInput.value;
  let secretNumber = Math.trunc(Math.random() * 2 + 1);
  console.log(secretNumber); //so i can see the answer for testing

  userQuestion.textContent = `Your question was "${question}"`;

  if (secretNumber === 1) {
    answerText.textContent = `No`;
    console.log(`No`);
  } else {
    console.log(`Yes`);
    answerText.textContent = `Yes`;
  }

  console.log(`User question: ${question}`);
  return question;
}
