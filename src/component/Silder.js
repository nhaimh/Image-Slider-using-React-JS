import { React, useState } from "react";
import BtnSlider from "./BtnSlide";
import dataSlider from "./DataSlider";
import "./Slide.css";
const Slider = () => {
  const [slideindex, setSlideindex] = useState(1);
  const nextSlide = () => {
    if (slideindex !== dataSlider.length) {
      setSlideindex(slideindex + 1);
    } else if (slideindex === dataSlider.length) {
      setSlideindex(1);
    }
  };
  const prevSlide = () => {
    if (slideindex !== dataSlider.length) {
      setSlideindex(slideindex - 1);
    } else if (slideindex === dataSlider.length) {
      setSlideindex(1);
    }
  };
  const moveDot = (index) => {
    setSlideindex(index);
  };

  return (
    <div className="container_slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideindex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={`/image/img${index + 1}.jpg`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideindex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
