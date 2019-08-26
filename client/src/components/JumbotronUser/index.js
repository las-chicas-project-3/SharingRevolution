import React from "react";
import "./style.css";

function JumboTron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h4 className="display-2">Welcome {props.name} </h4>
        <h1 className="display-5">Your Current Points: {props.points} 猎</h1>
      </div>
    </div>
  );
}

export default JumboTron;
