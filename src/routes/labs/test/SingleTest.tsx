import { h } from "preact";
import {
  countAnswered,
  isTestEnded,
  TestData,
  testLength,
  updateAnswer,
} from "./testState";
import style from "./style.css";

const SingleTest = (props: TestData) => {
  const answers = props.answers.map((answer, index) => (
    <p key={index}>
      <input
        type="checkbox"
        checked={answer === props.givenAnswer}
        disabled={isTestEnded.value}
        onClick={(e) => {
          e.preventDefault();
          updateAnswer(props.id, answer);
        }}
      />{" "}
      {answer}
    </p>
  ));
  return (
    <div class={style.test}>
      <h3>{props.question}</h3>
      <div>{answers}</div>
      <p>
        Отвечено {countAnswered} из {testLength}
      </p>
    </div>
  );
};

export default SingleTest;
