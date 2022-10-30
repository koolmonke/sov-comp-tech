import { h } from "preact";
import labStyle from "../style.css";
import style from "./style.css";
import {
  countRightAnswer,
  currentQuestion,
  isAllAnswered,
  mark,
  moveToNextQuestion,
  moveToPrevQuestion,
  testLength,
  testState,
} from "./testState";
import SingleTest from "./SingleTest";

const Result = () => (
  <div>
    <h3>
      Всего правильных ответов {countRightAnswer} из {testLength}
    </h3>
    <h3>Оценка {mark}</h3>
  </div>
);

const RightButton = () => (
  <button class={style.button} onClick={() => moveToPrevQuestion()}>
    Предыдущий
  </button>
);

const LeftButton = () => (
  <button class={style.button} onClick={() => moveToNextQuestion()}>
    Следующий
  </button>
);

const EndButton = () => (
  <button class={style.button} onClick={() => (isAllAnswered.value = true)}>
    Завершить
  </button>
);

const Test = () => (
  <div class={labStyle.lab}>
    {!isAllAnswered.value && (
      <div>
        {SingleTest(testState.value[currentQuestion.value])}
        <div>
          <LeftButton />
          <RightButton />
          <EndButton />
        </div>
      </div>
    )}
    {isAllAnswered.value && Result()}
  </div>
);

export default Test;
