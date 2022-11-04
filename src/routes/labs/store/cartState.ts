import { computed, signal } from "@preact/signals";

export type StoreItem = {
  key: number;
  imageUri: string;
  name: string;
  price: number;
};

export type CartItem = StoreItem & { amount: number };

export const storeItems = [
  {
    key: 0,
    imageUri: "/assets/cart/nothing-phone-1.jpg",
    name: "Nothing Phone 1 Черный",
    price: 33500,
  },
  {
    key: 1,
    imageUri: "/assets/cart/dato-240gb.jpg",
    name: "Dato SSD 240gb",
    price: 1300,
  },
  {
    key: 2,
    imageUri: "/assets/cart/samsung-galaxy-s22.jpg",
    name: "Samsung Galaxy S22 Фиолетовый",
    price: 55555,
  },
] as const;

export const cartState = signal<CartItem[]>([]);

export const addToCart = (key: number) => {
  const cartItem = cartState.value.find((item) => item.key === key);
  if (cartItem === undefined) {
    cartState.value = [
      ...cartState.value,
      { ...storeItems[key], amount: 1 },
    ].sort((a, b) => a.key - b.key);
    return;
  }
  cartState.value = [
    ...cartState.value.filter((item) => item.key !== cartItem.key),
    { ...cartItem, amount: cartItem.amount + 1 },
  ].sort((a, b) => a.key - b.key);
};

export const removeFromCart = (key: number) => {
  const item = cartState.value.find((i) => i.key == key);
  if (item === undefined) {
    return;
  }
  cartState.value =
    item.amount == 1
      ? cartState.value.filter((i) => i.key != key)
      : [
          ...cartState.value.filter((i) => i.key != key),
          { ...item, amount: item.amount - 1 },
        ].sort((a, b) => a.key - b.key);
};

export const removeAllFromCart = (key: number) => {
  cartState.value = cartState.value.filter((i) => i.key != key);
};

export const totalCartPrice = computed(() =>
  cartState.value.reduce((acc, { price, amount }) => acc + price * amount, 0)
);

export const isCartEmpty = computed(() => cartState.value.length === 0);
