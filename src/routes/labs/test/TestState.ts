import { computed, signal } from "@preact/signals";

export type SingleTestData = {
  id: number;
  question: string;
  answers: string[];
  rightAnswer: string;
  givenAnswer?: string;
};

export const testState = signal<SingleTestData[]>([
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

export const updateAnswer = (toUpdateId: number, newAnswer: string) => {
  const toUpdate = testState.value.find(({ id }) => toUpdateId === id);
  if (!toUpdate) {
    return;
  }
  testState.value = [
    ...testState.value.filter((item) => item.id !== toUpdateId),
    { ...toUpdate, givenAnswer: newAnswer },
  ].sort((a, b) => a.id - b.id);
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
