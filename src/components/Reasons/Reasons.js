import React from "react";
import "./Reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="someone in a gym" />
        <img src={image2} alt="someone in a gym" />
        <img src={image3} alt="someone in a gym" />
        <img src={image4} alt="someone in a gym" />
      </div>
      <div className="right-r">
        <div className="blur blur-r"></div>
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{
          color:'var(--gray)',fontWeight:'normal',marginTop:'2rem'}}>OUR PARTNERS</span>
        <div className="partners">
        <img src={nike} alt="nike logo"/>
        <img src={adidas} alt="adidas logo"/>
        <img src={nb} alt=" new balance logo"/>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
