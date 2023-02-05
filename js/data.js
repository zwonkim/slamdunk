/* 
1 ISTJ
2 ISTP
3 ISFJ
4 ISFP
5 ESTJ
6 ESFP
7 ESFJ
8 ESTP
9 INFJ
10 INTJ
11 INFP
12 INTP
13 ENFP
14 ENTP
15 ENFJ
16 ENTJ 
*/

const qnaList = [
  {
    q: "북산에 입부 한 첫날, 모두가 나를 쳐다보고 있다",
    a: [
      {
        answer: "누군가 나한테 말을 걸어줄 때까지 기다린다",
        type: [1, 2, 9, 10, 3, 4, 11, 12],
      },
      {
        answer: "큰소리로 관등성명을하며 먼저 인사한다",
        type: [5, 6, 13, 14, 7, 8, 15, 16],
      },
    ],
  },
  {
    q: "한나가 친해지고 싶다며 단 둘이 주말에 보자고 한다",
    a: [
      {
        answer: "너무 좋다 ! 근처에 있는 맛집과 카페를 검색한다",
        type: [5, 6, 13, 14, 7, 8, 15, 16],
      },
      {
        answer: "단 둘은 .. 아직 너무 어색하고 불편할 것 같은데 ..",
        type: [1, 2, 9, 10, 3, 4, 11, 12],
      },
    ],
  },
  {
    q: "강백호가 오늘 자기 경기는 어땠냐고 물어본다",
    a: [
      {
        answer:
          "전반에 마지막 수비 리바운드를 잡아내 경기 흐름을 잡아오신 것도 너무 멋있었고요 경기 마지막에 넣었던 덩크슛도 정말 인상 깊었어요",
        type: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        answer:
          "매 순간이 너무 멋있었는데요 공을 향한 선배의 저돌적인 눈빛과 나비처럼 날아 벌처럼 쏘아 올린 슛들이 특히 기억에 남아요",
        type: [9, 10, 11, 12, 13, 14, 15, 16],
      },
    ],
  },
  {
    q: "경기 전날, 잠자리에 누운 나는",
    a: [
      {
        answer: "컨디션 조절을 최대한 빨리 잠들기 위해 노력한다",
        type: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        answer: "덩크슛을 넣는 내 모습을 상상하며 이미지 트레이닝을 한다",
        type: [9, 10, 11, 12, 13, 14, 15, 16],
      },
    ],
  },
  {
    q: "경기 당일, 너무 긴장한 나에게 안선생님이 아무 생각도 하지 말고 크게 심호흡을 하라고 한다",
    a: [
      {
        answer:
          "아무 생각을 안 하려고 하는 순간, 코트장에서 자빠지는 상상을 해버렸다",
        type: [9, 10, 11, 12, 13, 14, 15, 16],
      },
      {
        answer: "선생님 말을 따라 크게 심호흡을 하며 머리를 비워본다",
        type: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ],
  },

  {
    q: "일주일 뒤, 여름 전지훈련을 간다고한다",
    a: [
      {
        answer: "일정에 맞춰 입을 옷, 세면도구, 비상약 등을 챙긴다",
        type: [1, 3, 5, 7, 9, 10, 15, 16],
      },
      {
        answer: "출발하기 직전에 온갖 짐을 가방에 쑤셔 넣는다",
        type: [2, 4, 6, 8, 11, 12, 13, 14],
      },
    ],
  },
  {
    q: "점심 식사 후 갑자기 서태웅이 배탈이 났다",
    a: [
      {
        answer: "선배님 괜찮으세요? 엄마손은 약손 해드릴까요?",
        type: [3, 4, 6, 7, 9, 11, 13, 15],
      },
      {
        answer: "오늘 점심 뭐드셨나요? 약은 드셨어요?",
        type: [1, 2, 5, 8, 10, 12, 14, 16],
      },
    ],
  },
  {
    q: "내 라커는?",
    a: [
      {
        answer: "모든 물건이 자리에 맞추어 정리 정돈이 되어있다",
        type: [1, 3, 5, 7, 9, 10, 15, 16],
      },
      {
        answer: "깨끗하지는 않지만 .. 나름의 질서가 있다",
        type: [2, 4, 6, 8, 11, 12, 13, 14],
      },
    ],
  },
  {
    q: "정대만이이 자꾸 날 쳐다본다",
    a: [
      {
        answer: "뭐지 ..? 내가 뭐 잘못했나 ..?",
        type: [3, 4, 6, 7, 9, 11, 13, 15],
      },
      {
        answer: "왜저래? 오늘 점심 뭐 먹지",
        type: [1, 2, 5, 8, 10, 12, 14, 16],
      },
    ],
  },
];

const resultList = [
  {
    name: "안선생님",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "송태섭",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "강백호",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "서태웅",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "정대만",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "채치수",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
