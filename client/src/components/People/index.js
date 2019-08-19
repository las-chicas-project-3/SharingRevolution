import React from "react";
import "./style.css";
import image from "./Jumbo.png"

function People(props) {
  return (
    <div className="people text-center" style={{ backgroundImage: `url(${image})` }}>
      {props.children}
    </div>
  );
}

export default People;
