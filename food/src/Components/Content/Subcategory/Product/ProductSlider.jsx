import { useState } from "react";
import * as s from "../../../../styles/ProductSliderStyle";
export const ProductSlider = (props) => {
  const [number, setNumber] = useState(0);
  const changeNumber = (imgNumber, qty) => {
    let newNumber = number + imgNumber;
    switch (newNumber) {
      case -1:
        newNumber = qty - 1;
        break;
      case qty:
        newNumber = 0;
        break;
      default:
        break;
    }
    setNumber(newNumber);
  };
  const dotsChange = (elem) => {
    setNumber(elem);
  };
  let slides = props.images.map((i) => (
    <Slides src={i.url} key={i.id} id={i.id} number={number} />
  ));
  const qty = slides.length;
  return (
    <s.ProductSlider>
      <Arrows text="<" changeNumber={changeNumber} value={-1} qty={qty} />
      <s.ProductSlides className={props.isModal}>
        {slides}
        <Dots qty={qty} dotsChange={dotsChange} number={number} />
      </s.ProductSlides>
      <Arrows text=">" changeNumber={changeNumber} value={1} qty={qty} />
    </s.ProductSlider>
  );
};

export const Slides = (props) => {
  let visible = props.id === props.number ? "" : "none";
  return <img src={props.src} alt="" style={{ display: visible }} />;
};

export const Dots = (props) => {
  let dots = [];
  for (let index = 0; index < props.qty; index++) {
    let active = index === props.number ? "active" : "";
    dots.push(
      <div
        key={index}
        className={active}
        onClick={() => {
          props.dotsChange(index);
        }}
      ></div>
    );
  }
  return <s.ProductDots>{dots}</s.ProductDots>;
};

export const Arrows = (props) => {
  return (
    <s.ProductArrows
      onClick={() => {
        props.changeNumber(props.value, props.qty);
      }}
      className={props.value === 1 ? "rightArrow" : "leftArrow"}
    >
      {props.text}
    </s.ProductArrows>
  );
};
