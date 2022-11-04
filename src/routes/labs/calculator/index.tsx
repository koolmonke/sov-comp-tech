import { h } from "preact";
import style from "./style.css";
import { useReducer } from "preact/hooks";
import { Action, CalculatorState } from "./types";

const reduceAction = (
  left: number,
  right: number,
  op: Action | null
): number | null => {
  switch (op) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return left / right;
    case "C":
    case "=":
    case null:
      return null;
  }
};

const calculatorInitualState = {
  previous: 0,
  current: 0,
  op: null,
  isResultOnScreen: false,
} as const;

const reducer = (
  { previous, current, op, isResultOnScreen }: CalculatorState,
  action: Action | number
): CalculatorState => {
  if (typeof action == "number") {
    if (isResultOnScreen) {
      return {
        previous: current,
        current: action,
        op,
        isResultOnScreen: false,
      };
    }
    return {
      previous,
      current: current * 10 + action,
      op,
      isResultOnScreen: false,
    };
  }
  switch (action) {
    case "*":
    case "/":
    case "+":
    case "-":
    case "=": {
      const result = reduceAction(previous, current, op);
      return {
        previous: current,
        current: result ? result : current,
        op: action,
        isResultOnScreen: true,
      };
    }
    case "C":
      return calculatorInitualState;
  }
};

const Calculator = () => {
  const [{ current }, dispatch] = useReducer(reducer, calculatorInitualState);
  const buttons = (
    [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "/", "C", 0, "=", "*"] as const
  ).map((buttonName) => (
    <button
      key={buttonName}
      class={style.gridElement}
      onClick={() => dispatch(buttonName)}
    >
      {buttonName}
    </button>
  ));

  return (
    <div class={style.container}>
      <div class={style.innerContainer}>
        <div class={style.calculator}>
          <input value={current} readOnly class={style.result} type="text" />
          <div class={style.grid}>{buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
