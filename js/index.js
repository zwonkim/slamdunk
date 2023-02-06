const startPage = document.getElementById("startPage");
const qnaPage = document.getElementById("qnaPage");
const resultPage = document.getElementById("resultPage");
const startBtn = document.getElementById("startBtn");
let selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const setResult = () => {
  const result = calcResult();

  const title = document.querySelector(".resultType");
  title.innerHTML = resultList[result].name;

  const desc = document.querySelector(".resultDesc");
  desc.innerHTML = resultList[result].desc;
};

const calcResult = () => {
  const max = selected.indexOf(Math.max(...selected));
  let index;
  for (let i = 0; i < resultList.length; i++) {
    if (resultList[i].type.includes(max)) {
      index = i;
    }
  }
  return index;
};

const goResult = () => {
  qnaPage.style.display = "none";
  resultPage.style.display = "block";
  calcResult();
  setResult();
};

const clickAnswer = (index) => {
  const answers = document.querySelectorAll(".answerList");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
    answers[i].style.display = "none";
  }
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
      selected[type[i] - 1] += 1;
    }
    console.log("셀렉트", selected);
    index += 1;
    goNext(index);
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

  const status = document.querySelector(".status");
  status.style.width = (80 / qnaList.length) * (index + 1) + "%";
};

const getStart = () => {
  startPage.style.display = "none";
  qnaPage.style.display = "flex";
  let index = 0;
  goNext(index);
};

startBtn.addEventListener("click", () => {
  getStart();
});
