import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import style from "./style.css";

const Home = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div class={style.home}>
      <h1>Это домашняя страница Хакимова Артура</h1>
      <p>Учусь на 1 курсе магистратуры в БашГу по специальности прикладная информатика и математика</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>
    </div>
  );
};

export default Home;
