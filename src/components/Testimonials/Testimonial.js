import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
function Testimonial() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const selectPrevious = () => {
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
  };
  const selectNext = () => {
    selected === tLength-1
      ? setSelected(0)
      : setSelected((curr) => curr + 1);
  };
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="reviewer"></img>
        <div className="arrows">
          <img src={leftArrow} alt="left arrow" onClick={selectPrevious}></img>
          <img src={rightArrow} alt="left arrow" onClick={selectNext}></img>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
