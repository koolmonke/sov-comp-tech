import { h } from "preact";
import labStyle from "../style.css";
import {
  countRightAnswer,
  isAllAnswered,
  mark,
  testLength,
  testState,
} from "./testState";
import SingleTest from "./SingleTest";

const Test = () => (
  <div class={labStyle.lab}>
    {testState.value.map(SingleTest)}
    {isAllAnswered.value && (
      <div>
        <h3>
          Всего правильных ответов {countRightAnswer} из {testLength}
        </h3>
        <h3>Оценка {mark}</h3>
      </div>
    )}
  </div>
);

export default Test;
