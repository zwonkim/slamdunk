import { qnaList, resultList } from "./../data/index.js";
var startPage = document.getElementById("startPage");
var qnaPage = document.getElementById("qnaPage");
var resultPage = document.getElementById("resultPage");
var startBtn = document.getElementById("startBtn");
var retryBtn = document.querySelector(".retryBtn");
var shareTwBtn = document.querySelector(".shareTw");
var selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
retryBtn.addEventListener("click", function () {
  selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  resultPage.style.animation = "fadeOut 0.7s";
  setTimeout(function () {
    startPage.style.animation = "fadeIn 0.7s";
    setTimeout(function () {
      resultPage.style.display = "none";
      startPage.style.display = "flex";
    }, 200);
  }, 200);
});
shareTwBtn.addEventListener("click", function () {
  var sendText = "이 세계에선 내가 북산의 농구부 ?";
  var pageUrl = "https://baekhoisthebest.netlify.app/";
  window.open(
    "https://twitter.com/intent/tweet?text="
      .concat(sendText, "&url=")
      .concat(pageUrl)
  );
});
var setResult = function () {
  var result = calcResult();
  var title = document.querySelector(".resultType");
  title.innerHTML = resultList[result].name;
  var desc = document.querySelector(".resultDesc");
  desc.innerHTML = resultList[result].desc;
  var imgBox = document.querySelector(".resultImg");
  var img = document.createElement("img");
  img.src = "./image/".concat(result, ".jpg");
  imgBox.append(img);
  if (imgBox.hasChildNodes()) {
    imgBox.removeChild(imgBox.childNodes[0]);
    imgBox.append(img);
  }
};
var calcResult = function () {
  var max = selected.indexOf(Math.max.apply(Math, selected));
  var index = -1;
  for (var i = 0; i < resultList.length; i++) {
    if (resultList[i].type.includes(max)) {
      index = i;
    }
  }
  return index;
};
var goResult = function () {
  qnaPage.style.animation = "fadeOut 0.7s";
  setTimeout(function () {
    resultPage.style.animation = "fadeIn 0.7s";
    setTimeout(function () {
      qnaPage.style.display = "none";
      resultPage.style.display = "flex";
    }, 200);
  }, 200);
  calcResult();
  setResult();
};
var clickAnswer = function (index) {
  var answers = document.querySelectorAll(".answerList");
  var _loop_1 = function (i) {
    answers[i].disabled = true;
    answers[i].style.animation = "fadeOut 0.9s";
    setTimeout(function () {
      answers[i].style.display = "none";
    }, 600);
  };
  for (var i = 0; i < answers.length; i++) {
    _loop_1(i);
  }
};
var createAnswer = function (answer, index, type) {
  var aBox = document.querySelector(".answers");
  var answerBtn = document.createElement("button");
  answerBtn.classList.add("answerList");
  answerBtn.innerHTML = answer;
  aBox === null || aBox === void 0 ? void 0 : aBox.append(answerBtn);
  answerBtn.addEventListener("click", function () {
    clickAnswer(index);
    for (var i = 0; i < type.length; i++) {
      selected[type[i] - 1] += 1;
    }
    index += 1;
    setTimeout(function () {
      goNext(index);
    }, 600);
  });
};
var goNext = function (index) {
  if (index === qnaList.length) {
    goResult();
    return;
  }
  var qBox = document.querySelector(".question");
  if (qBox !== null) {
    qBox.innerHTML = qnaList[index].q;
    for (var i = 0; i < qnaList[index].a.length; i++) {
      var answer = qnaList[index].a[i].answer;
      var type = qnaList[index].a[i].type;
      createAnswer(answer, index, type);
    }
  }
  var status = document.querySelector(".status");
  status.style.width = (100 / qnaList.length) * (index + 1) + "%";
};
var getStart = function () {
  if (startPage !== null && qnaPage !== null) {
    startPage.style.animation = "fadeOut 0.7s";
    setTimeout(function () {
      qnaPage.style.animation = "fadeIn 0.7s";
      setTimeout(function () {
        startPage.style.display = "none";
        qnaPage.style.display = "flex";
      }, 200);
    }, 200);
  }
  var index = 0;
  goNext(index);
};
startBtn === null || startBtn === void 0
  ? void 0
  : startBtn.addEventListener("click", function () {
      getStart();
    });
