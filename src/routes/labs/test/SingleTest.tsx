import { h } from "preact";
import {
  countAnswered,
  currentQuestion,
  isAllAnswered,
  TestData,
  testLength,
  updateAnswer,
} from "./testState";

const SingleTest = (props: TestData) => {
  const answers = props.answers.map((answer, index) => (
    <p key={index}>
      {answer}{" "}
      <input
        type="checkbox"
        checked={answer === props.givenAnswer}
        disabled={isAllAnswered.value}
        onClick={(e) => {
          e.preventDefault();
          updateAnswer(props.id, answer);
        }}
      />
    </p>
  ));
  return (
    <div>
      <h3>{props.question}</h3>
      <div>{answers}</div>
      <p>
        Отвечено {countAnswered} из {testLength}
      </p>
      <p>
        Вопрос {currentQuestion.value+1} из {testLength}
      </p>
    </div>
  );
};

export default SingleTest;
