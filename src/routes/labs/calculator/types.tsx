export type Action = "+" | "-" | "*" | "/" | "C" | "=";

export type CalculatorState = {
  previous: number;
  current: number;
  op: Action | null;
  isResultOnScreen: boolean;
};
