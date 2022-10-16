import { h } from "preact";
import labStyle from "../style.css";
import { countRightAnswer, isAllAnswered, testLength, testState } from "./testState";
import SingleTest from "./SingleTest";

const Test = () => (
  <div class={labStyle.lab}>
    {testState.value.map(SingleTest)}
    {isAllAnswered.value && (
      <h3>
        Всего правильных ответов {countRightAnswer} из{" "}
        {testLength}
      </h3>
    )}
  </div>
);

export default Test;
