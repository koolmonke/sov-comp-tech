import { h } from "preact";
import style from "./style.css";
import labStyle from "../style.css";
import {
  cartState,
  isCartEmpty,
  storeItems,
  totalCartPrice,
} from "./cartState";
import StoreItemComponent from "./components/StoreItem";
import CartItemComponent from "./components/CartItem";

const Cart = () => {
  return (
    <div class={labStyle.lab}>
      <div class={style.store}>{storeItems.map(StoreItemComponent)}</div>
      <div class={style.cart}>
        <p>Корзина</p>
        {isCartEmpty.value && <p>Ваша корзина пуста</p>}
        {cartState.value.map(CartItemComponent)}
        {!isCartEmpty.value && <p>Сумма корзины {totalCartPrice} руб.</p>}
      </div>
    </div>
  );
};

export default Cart;
