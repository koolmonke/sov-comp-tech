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
  <a class={style.button} onClick={() => moveToPrevQuestion()}>
    Предыдущий
  </a>
);

const LeftButton = () => (
  <a class={style.button} onClick={() => moveToNextQuestion()}>
    Следующий
  </a>
);

const Test = () => (
  <div class={labStyle.lab}>
    {!isAllAnswered.value && (
      <div>
        {SingleTest(testState.value[currentQuestion.value])}
        <div>
          <LeftButton />
          <RightButton />
        </div>
      </div>
    )}
    {isAllAnswered.value && Result()}
  </div>
);

export default Test;
