const startPage = document.getElementById("startPage");
const qnaPage = document.getElementById("qnaPage");
const resultPage = document.getElementById("resultPage");
const startBtn = document.getElementById("startBtn");
let select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const endPoint = 8;

//결과값 더하기랑 endPoint 다시 봐봐

console.log(select);
const setResult = () => {};

const calcResult = () => {
  console.log(select);
};

const goResult = () => {
  qnaPage.classList.add("hidden");
  resultPage.classList.remove("hidden");
  setResult();
  calcResult();
};

const clickAnswer = (index) => {
  index += 1;
  const answers = document.querySelectorAll(".answerList");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
    answers[i].classList.add("hidden");
  }

  goNext(index);
};

const createAnswer = (answer, index, type) => {
  const aBox = document.querySelector(".answers");
  const answerBtn = document.createElement("button");
  answerBtn.classList.add("answerList");
  answerBtn.innerHTML = answer;
  aBox.append(answerBtn);

  answerBtn.addEventListener("click", () => {
    clickAnswer(index);
    console.log("타입", type);
    for (let i = 0; i < type.length; i++) {
      select[type[i]] += 1;
    }
  });
};

const goNext = (index) => {
  if (index === qnaList.length) {
    goResult();
    return;
  }
  const qBox = document.querySelector(".question");
  qBox.innerHTML = qnaList[index].q;
  for (let i = 0; i < qnaList[index].a.length; i++) {
    const answer = qnaList[index].a[i].answer;
    const type = qnaList[index].a[i].type;
    createAnswer(answer, index, type);
  }
};

const getStart = () => {
  startPage.classList.add("hidden");
  qnaPage.classList.remove("hidden");
  let index = 0;
  goNext(index);
};

startBtn.addEventListener("click", () => {
  getStart();
});
