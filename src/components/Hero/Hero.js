import React from "react";
import Header from "../Header/Header";

import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "sprin", duration: 4 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best add*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/*hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>
        {/*statistics section*/}
        <div className="figures">
          <div>
            <span>+140</span> <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span> <span>members joined</span>
          </div>
          <div>
            <span>+50</span> <span>fitness progress</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          transition={transition}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="this is a heart" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </motion.div>

        {/*Hero images */}
        <img src={hero_image} alt="a person in a gym" className="hero-image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          alt="backgroung lines for decoration"
          className="hero-image-back"
        />
        {/* Calories section*/}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="description of calories" />
          <div>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
