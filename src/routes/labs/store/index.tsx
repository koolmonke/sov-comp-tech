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

const EmptyCart = () => <p>Ваша корзина пуста</p>;
const CartTotalPrice = () => {
  return <p>Сумма корзины {totalCartPrice}</p>;
};

const Cart = () => {
  return (
    <div class={labStyle.lab}>
      <div class={style.store}>{storeItems.map(StoreItemComponent)}</div>
      <div class={style.cart}>
        <p>Корзина</p>
        {isCartEmpty.value && <EmptyCart />}
        {cartState.value.map(CartItemComponent)}
        {!isCartEmpty.value && <CartTotalPrice />}
      </div>
    </div>
  );
};

export default Cart;
