import React from "react";
import "./style.css";

function Card(props) {
  if (props.user) {
    return (
      <div className="card" key={props.user.key}>
        <h1>client name : {props.user.name}</h1>
        <h1>points : {props.user.points}</h1>
      </div>
    )
  } else {
    return (
      <div className="card" key={props.product.key}>
        <h1>product name : {props.product.name}</h1>
      </div>
    )
  }
}

export default Card;
