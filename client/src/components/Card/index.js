import React from "react";
import BuyButton from "../BuyButt";
import "./style.css";
function Card(props) {
  return (
    <div className="card" key={props.product.key}>
      <h1>Product Name: {props.product.name}</h1><br />
      <img alt="" src={props.product.image} /><br />
      <p>Price: {props.product.points}</p>
      <BuyButton price={props.product.points} id={props.product._id} onClick={props.onClick} />
    </div>
  )
}
export default Card;