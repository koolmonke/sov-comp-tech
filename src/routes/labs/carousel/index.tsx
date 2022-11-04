import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";

const initialCards = [
  {
    src: "/assets/slides/slide1.jpg",
    deg: 360,
  },
  {
    src: "/assets/slides/slide2.jpg",
    deg: 435,
  },
  {
    src: "/assets/slides/slide3.jpg",
    deg: 500,
  },
  {
    src: "/assets/slides/slide4.jpg",
    deg: 285,
  },
  {
    src: "/assets/slides/slide5.jpg",
    deg: 220,
  },
];

const Carousel = () => {
  const [IsRotate, setIsRotate] = useState(false);
  const [cards, setCards] = useState(initialCards);

  const handleRotate = () => {
    const newCards = cards.map((card) => {
      return {
        ...card,
        deg: card.deg + 15,
      };
    });
    setCards(newCards);
  };

  useEffect(() => {
    if (!IsRotate) {
      return;
    }

    // eslint-disable-next-line no-var
    var startInterval = setInterval(() => {
      if (IsRotate) {
        handleRotate();
      }
    }, 200);
    return () => clearInterval(startInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsRotate, cards]);

  return (
    <div>
      <div class={style.container}>
        <div class={style.cards_wrapper}>
          {cards.map((card, index) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={index}
              class={style.angle_wrapper}
              style={{ transform: `rotate(${card.deg}deg)` }}
            >
              <div
                class={style.card}
                style={{ transform: `rotate(-${card.deg}deg)` }}
              >
                <img class={style.card_img} src={card.src} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ margin: 20 }}>
        <button
          onClick={() => {
            setIsRotate(true);
            handleRotate();
          }}
          style={{ margin: "20px" }}
        >
          Запустить карусель!
        </button>
        <button onClick={() => setIsRotate(false)} style={{ margin: "20px" }}>
          Остановить карусель!
        </button>
      </div>
    </div>
  );
};
export default Carousel;
