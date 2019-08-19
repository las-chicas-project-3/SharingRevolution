import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <h1>Object: {props.name}</h1>
      <h1>Points: {props.points}</h1>
      <h1>Owner: {props.owner}</h1>
    </div>
  );
}

export default Card;
