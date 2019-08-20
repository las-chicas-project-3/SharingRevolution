import React from "react";
import "./style.css";

function BuyBtn(props) {
  return (
    <button type="button" className="btn btn-info buy-btn" id={props.id}>
      BUY
    </button>
  );
}

export default BuyBtn;
