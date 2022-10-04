import { React } from "react";
import RightArrow from "./icon/right-arrow.svg";
import LeftArrow from "./icon/left-arrow.svg";
import "./Slide.css";
const BtnSlider = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn_slide next" : "btn_slide prev"}
      >
        <img src={direction === "next" ? RightArrow : LeftArrow} alt="" />
      </button>
    </div>
  );
};

export default BtnSlider;
