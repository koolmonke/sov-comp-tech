import { h } from "preact";
import { useReducer } from "preact/hooks";
import style from "./style.css";

export const Slideshow = ({ imageUrls }: { imageUrls: string[] }) => {
  const reducer = (currentIndex: number, action: "next" | "prev") => {
    switch (action) {
      case "next":
        return currentIndex > 0 ? currentIndex - 1 : imageUrls.length - 1;
      case "prev":
        return currentIndex < imageUrls.length - 1 ? currentIndex + 1 : 0;
    }
  };

  const [currentIndex, dispatch] = useReducer(reducer, 0);

  return (
    <div class={style.slideContainer}>
      <div class={style.slide}>
        <a class={style.buttons} onClick={() => dispatch("next")}>
          &#10094;
        </a>
        <img class={style.slideImage} src={imageUrls[currentIndex]} />
        <a class={style.buttons} onClick={() => dispatch("prev")}>
          &#10095;
        </a>
      </div>
      <p class={style.pageCount}>
        {currentIndex + 1}/{imageUrls.length}
      </p>
    </div>
  );
};
