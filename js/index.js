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

  const imgBox = document.querySelector(".resultImg");
  const img = document.createElement("img");
  img.src = `./image/${result}.jpg`;
  imgBox.append(img);
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
  qnaPage.style.animation = "fadeOut 0.7s";
  setTimeout(() => {
    resultPage.style.animation = "fadeIn 0.7s";
    setTimeout(() => {
      qnaPage.style.display = "none";
      resultPage.style.display = "flex";
    }, 200);
  }, 200);

  calcResult();
  setResult();
};

const clickAnswer = (index) => {
  const answers = document.querySelectorAll(".answerList");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
    answers[i].style.animation = "fadeOut 0.9s";
    setTimeout(() => {
      answers[i].style.display = "none";
    }, 600);
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
    for (let i = 0; i < type.length; i++) {
      selected[type[i] - 1] += 1;
    }
    index += 1;
    setTimeout(() => {
      goNext(index);
    }, 600);
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
  status.style.width = (100 / qnaList.length) * (index + 1) + "%";
};

const getStart = () => {
  startPage.style.animation = "fadeOut 0.7s";
  setTimeout(() => {
    qnaPage.style.animation = "fadeIn 0.7s";
    setTimeout(() => {
      startPage.style.display = "none";
      qnaPage.style.display = "flex";
    }, 200);
  }, 200);

  let index = 0;
  goNext(index);
};

startBtn.addEventListener("click", () => {
  getStart();
});
