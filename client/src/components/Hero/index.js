import React from "react";
import "./style.css";
import image from "./LIÈREN.png"

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${image})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
