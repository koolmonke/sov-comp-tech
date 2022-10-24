import { computed, signal } from "@preact/signals";

export type TestData = {
  id: number;
  question: string;
  answers: string[];
  rightAnswer: string;
  givenAnswer?: string;
};

export const testState = signal<TestData[]>([
  {
    id: 0,
    question: "Из какой страны родом Джастин Бибер?",
    answers: ["Канада", "США", "Франция", "Англия"],
    rightAnswer: "Канада",
  },
  {
    id: 1,
    question: "Какой герой мультфильма живет в ананасе под водой?",
    answers: ["Немо", "Рик и Морти", "Губка Боб Квадратные Штаны"],
    rightAnswer: "Губка Боб Квадратные Штаны",
  },
  {
    id: 2,
    question: "Что является национальным животным Шотландии?",
    answers: ["Лошадь", "Единорог", "Волк", "Тигр", "Корова"],
    rightAnswer: "Единорог",
  },
  {
    id: 3,
    question: "Как называются четыре Факультета Хогвартса?",
    answers: [
      "Гриффиндор, Пуффендуй, Когтевран и Слизерин",
      "Грифон, Ворон, Слон и Змея",
      "Север, Восток, Запад и Юг",
      "Красный, Синий, Зеленый и Оранжевый",
    ],
    rightAnswer: "Гриффиндор, Пуффендуй, Когтевран и Слизерин",
  },
]);

export const updateAnswer = (toUpdateId: number, newAnswer: string): void => {
  const toUpdate = testState.value.find(({ id }) => toUpdateId === id);
  if (!toUpdate) {
    return;
  }
  testState.value = [
    ...testState.value.filter(({ id }) => id !== toUpdateId),
    { ...toUpdate, givenAnswer: newAnswer },
  ].sort((a, b) => a.id - b.id);
  moveToNextQuestion()
};

export const countRightAnswer = computed(
  () =>
    testState.value.filter(
      ({ rightAnswer, givenAnswer }) => rightAnswer === givenAnswer
    ).length
);

export const isAllAnswered = computed(() =>
  testState.value.every(({ givenAnswer }) => givenAnswer !== undefined)
);

export const countAnswered = computed(
  () =>
    testState.value.filter(({ givenAnswer }) => givenAnswer !== undefined)
      .length
);

export const testLength = computed(() => testState.value.length);

export const mark = computed(() =>
  Math.round(Math.max((countRightAnswer.value / testLength.value) * 5, 2))
);

export const currentQuestion = signal<number>(0);

export const moveToNextQuestion = () => {
  if (currentQuestion.value < testLength.value - 1) {
    currentQuestion.value = currentQuestion.value + 1;
  }
};

export const moveToPrevQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value = currentQuestion.value - 1;
  }
};
