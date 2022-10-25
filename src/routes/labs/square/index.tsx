import { h } from "preact";
import style from "./style.css"

const Square = () => {

  return (
    <div class={style.container}>
     <div class={style.sun}>
      <div class={style.dot}> </div>
     </div>
    </div>
  );
};

export default Square;
