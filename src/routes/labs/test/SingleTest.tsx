import { h } from "preact";
import { isAllAnswered, TestData, updateAnswer } from "./TestState";

const SingleTest = (props: TestData) => {
  const answers = props.answers.map((answer, index) => {
    return (
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
        />{" "}
      </p>
    );
  });
  return (
    <div>
      <h3>{props.question}</h3>
      <div>{answers}</div>
    </div>
  );
};

export default SingleTest;
