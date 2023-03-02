import React from "react";
import "./Plans.css";
import whiteTick from '../../assets/whiteTick.png'
import { plansData } from "../../data/plansData";

function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START </span>
        <span>YOUR JOURNEY </span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/*plans card*/}
      <div className="plans">
        {plansData.map((plan,i)=>{
          return(
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  
                  return (
                    <div className="feature">
                      <img src={whiteTick} alt='tick illustration' />
                      <span key={i}>{feature}</span>
                    </div>
                  )
                })}
              </div>
              <div>
              <span>See more Benefits -> </span>
              </div>
              <button className="btn">Join now</button>
            </div>
          )
        }  )}
      </div>
    </div>
  );
}

export default Plans;
