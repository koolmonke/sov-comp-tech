import { h } from "preact";
import style from "./style.css";
import labStyle from "../style.css";
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

  return (
    <div class={labStyle.lab}>
      <div class={style.calculator}>
        <input value={current} readOnly class={style.result} type="text" />
        <div class={style.grid}>
          <div class={style.gridElement} onClick={() => dispatch(1)}>
            1
          </div>
          <div class={style.gridElement} onClick={() => dispatch(2)}>
            2
          </div>
          <div class={style.gridElement} onClick={() => dispatch(3)}>
            3
          </div>
          <div class={style.gridElement} onClick={() => dispatch("+")}>
            +
          </div>
          <div class={style.gridElement} onClick={() => dispatch(4)}>
            4
          </div>
          <div class={style.gridElement} onClick={() => dispatch(5)}>
            5
          </div>
          <div class={style.gridElement} onClick={() => dispatch(6)}>
            6
          </div>
          <div class={style.gridElement} onClick={() => dispatch("-")}>
            -
          </div>
          <div class={style.gridElement} onClick={() => dispatch(7)}>
            7
          </div>
          <div class={style.gridElement} onClick={() => dispatch(8)}>
            8
          </div>
          <div class={style.gridElement} onClick={() => dispatch(9)}>
            9
          </div>
          <div class={style.gridElement} onClick={() => dispatch("/")}>
            /
          </div>
          <div class={style.gridElement} onClick={() => dispatch("C")}>
            C
          </div>
          <div class={style.gridElement} onClick={() => dispatch(0)}>
            0
          </div>
          <div class={style.gridElement} onClick={() => dispatch("=")}>
            =
          </div>
          <div class={style.gridElement} onClick={() => dispatch("*")}>
            *
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
