import { h } from "preact";
import labStyle from "../style.css";
import style from "./style.css"

const Square = () => {

  return (
    <div class={labStyle.lab}>
     <div class={style.sun}>
      <div class={style.dot}> </div>
     </div>
    </div>
  );
};

export default Square;
