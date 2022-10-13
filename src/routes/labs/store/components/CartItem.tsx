import { h } from "preact";
import { CartItem, removeAllFromCart, removeFromCart } from "../cartState";
import style from "./style.css";

const CartItemComponent = (props: CartItem) => {
  return (
    <div class={style.component}>
      <img src={props.imageUri} />
      <p>
        {props.name} {props.price} руб.
      </p>
      <p>{props.amount} шт.</p>
      <a class={style.button} onClick={() => removeFromCart(props.key)}>
        Убрать
      </a>
      <a class={style.button} onClick={() => removeAllFromCart(props.key)}>
        Убрать все
      </a>
    </div>
  );
};

export default CartItemComponent;
