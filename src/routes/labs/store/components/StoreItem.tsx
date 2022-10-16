import { h } from "preact";
import { addToCart, StoreItem } from "../cartState";
import style from "./style.css";

const StoreItemComponent = (props: StoreItem) => (
  <div class={style.component}>
    <img src={props.imageUri} />
    <p>
      {props.name} {props.price} руб.
    </p>
    <a class={style.button} onClick={() => addToCart(props.key)}>
      Добавить
    </a>
  </div>
);

export default StoreItemComponent;
