import React from "react";
import "./style.css";

function Card(props) {
  if (props.client) {
    return (
      <div className="card" key={props.client.key}>
        <h1>client name : {props.client.name}</h1>
        <h1>points : {props.client.points}</h1>
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
