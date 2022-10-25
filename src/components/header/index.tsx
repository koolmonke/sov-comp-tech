import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <nav>
      <h1>Лабораторные работы по Современным компьютерным технологиям</h1>
      <Link activeClassName={style.active} href="/">
        Home Page
      </Link>
      <Link activeClassName={style.active} href="/lab/slideshow">
        Слайдшоу
      </Link>
      <Link activeClassName={style.active} href="/lab/calc">
        Калькулятор
      </Link>
      <Link activeClassName={style.active} href="/lab/test">
        Тест
      </Link>
      <Link activeClassName={style.active} href="/lab/cart">
        Корзина магазина
      </Link>
      <Link activeClassName={style.active} href="/lab/square">
        Квадрат
      </Link>
      <Link activeClassName={style.active} href="/lab/carousel">
        Карусель
      </Link>
    </nav>
  </header>
);

export default Header;
