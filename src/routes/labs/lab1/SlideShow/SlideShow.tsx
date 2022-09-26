import { h } from "preact";
import { useReducer } from "preact/hooks";
import style from "./style.css";

const Slideshow = ({ imageUrls }: { imageUrls: string[] }) => {
  const reducer = (currentIndex: number, action: "next" | "prev") => {
    switch (action) {
      case "next":
        return (currentIndex + 1) % imageUrls.length;
      case "prev":
        return currentIndex == 0 ? imageUrls.length - 1 : currentIndex - 1;
    }
  };

  const [currentIndex, dispatch] = useReducer(reducer, 0);

  return (
    <div class={style.slideContainer}>
      <div class={style.slide}>
        <a class={style.buttons} onClick={() => dispatch("prev")}>
          &#10094;
        </a>
        <img class={style.slideImage} src={imageUrls[currentIndex]} />
        <a class={style.buttons} onClick={() => dispatch("next")}>
          &#10095;
        </a>
      </div>
      <p>
        {currentIndex + 1}/{imageUrls.length}
      </p>
    </div>
  );
};

export default Slideshow;
