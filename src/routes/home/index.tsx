import { h } from "preact";

import style from "./style.css";

const Home = () => {
  return (
    <div class={style.home}>
      <h1>Это домашняя страница Хакимова Артура</h1>
      <p>
        Учусь на 1 курсе магистратуры в БашГУ по специальности прикладная
        математика и информатика
      </p>
      <p>
        Контакты: <a href="https://vk.com/gothpope">VK</a> |{" "}
        <a href="https://github.com/koolmonkey">GitHub</a>
      </p>
      <img class={style.image} src="/assets/homepage/image.jpg" />
    </div>
  );
};

export default Home;
