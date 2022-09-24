import { h } from "preact";
import style from "../style.css";
import { Slideshow } from "./SlideShow/SlideShow";

export const Lab1 = () => (
  <div class={style.lab}>
    <Slideshow
      imageUrls={[
        "/assets/slides/slide1.jpg",
        "/assets/slides/slide2.jpg",
        "/assets/slides/slide3.jpg",
        "/assets/slides/slide4.jpg",
        "/assets/slides/slide5.jpg",
        "/assets/slides/slide6.jpg",
      ]}
    />
  </div>
);