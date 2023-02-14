import { qnaList, resultList } from './data';

const startPage = document.getElementById("startPage") as HTMLElement;
const qnaPage = document.getElementById("qnaPage") as HTMLElement;
const resultPage = document.getElementById("resultPage") as HTMLElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
let selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const retryBtn = document.querySelector(".retryBtn") as HTMLButtonElement;
retryBtn.addEventListener("click", () => {
  selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  resultPage.style.animation = "fadeOut 0.7s";
  setTimeout(() => {
    startPage.style.animation = "fadeIn 0.7s";
    setTimeout(() => {
      resultPage.style.display = "none";
      startPage.style.display = "flex";
    }, 200);
  }, 200);
});

const shareTwBtn = document.querySelector(".shareTw") as HTMLButtonElement;
shareTwBtn.addEventListener("click", () => {
  const sendText = "이 세계에선 내가 북산의 농구부 ?";
  const pageUrl = "https://baekhoisthebest.netlify.app/";
  window.open(
    `https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`
  );
});


const setResult = () => {
  const result = calcResult();
  // console.log("결과", result);

  const title = document.querySelector(".resultType") as HTMLDivElement;
  title.innerHTML = resultList[result].name;

  const desc = document.querySelector(".resultDesc") as HTMLDivElement;
  desc.innerHTML = resultList[result].desc;

  const imgBox = document.querySelector(".resultImg") as HTMLDivElement;
  const img = document.createElement("img");
  img.src = `./image/${result}.jpg`;
  imgBox.append(img);
  if (imgBox.hasChildNodes()) {
    imgBox.removeChild(imgBox.childNodes[0]);
    imgBox.append(img);
  }
};

type TypeCalcResult = () => number

const calcResult:TypeCalcResult = () => {
  const max = selected.indexOf(Math.max(...selected));
  // console.log("맥스", max);
  let index = -1;
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

const clickAnswer = (index:number) => {
  const answers:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".answerList");
  for (let i = 0; i < answers.length; i++) {
    answers[i].disabled = true;
    answers[i].style.animation = "fadeOut 0.9s";
    setTimeout(() => {
      answers[i].style.display = "none";
    }, 600);
  }
};

const createAnswer = (answer:string, index:number, type:number[]) => {
  const aBox = document.querySelector(".answers");
  const answerBtn = document.createElement("button");
  answerBtn.classList.add("answerList");
  answerBtn.innerHTML = answer;
  aBox?.append(answerBtn);

  answerBtn.addEventListener("click", () => {
    clickAnswer(index);
    for (let i = 0; i < type.length; i++) {
      selected[type[i] - 1] += 1;
    }
    // console.log(selected);
    index += 1;
    setTimeout(() => {
      goNext(index);
    }, 600);
  });
};

const goNext = (index: number) => {
  if (index === qnaList.length) {
    goResult();
    return;
  }

  const qBox = document.querySelector(".question");
  if(qBox !== null) {
    qBox.innerHTML = qnaList[index].q;
  for (let i = 0; i < qnaList[index].a.length; i++) {
    const answer = qnaList[index].a[i].answer;
    const type = qnaList[index].a[i].type;
    createAnswer(answer, index, type);
  }
  }

  const status = document.querySelector(".status") as HTMLDivElement;
  status.style.width = (100 / qnaList.length) * (index + 1) + "%";
};

const getStart = () => {
  if(startPage !== null && qnaPage !== null) {
    startPage.style.animation = "fadeOut 0.7s";
  setTimeout(() => {
    qnaPage.style.animation = "fadeIn 0.7s";
    setTimeout(() => {
      startPage.style.display = "none";
      qnaPage.style.display = "flex";
    }, 200);
  }, 200);
  }
  let index = 0;
  goNext(index);
};

startBtn?.addEventListener("click", () => {
  getStart();
});
