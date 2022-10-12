import { h } from "preact";
import labStyle from "../style.css";
import { countRightAnswer, isAllAnswered, testState } from "./TestState";
import SingleTest from "./SingleTest";

const Test = () => (
  <div class={labStyle.lab}>
    {testState.value.map((item) => SingleTest(item))}
    {isAllAnswered.value && (
      <h3>
        Всего правильных ответов {countRightAnswer} из{" "}
        {testState.value.length}
      </h3>
    )}
  </div>
);

export default Test;
