import React from "react";
import "./style.css";

function JumboTron(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h4 class="display-2">Welcome {props.name}, </h4>
        <h1 class="display-5"> your current points: {props.points} 猎.</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  );
}

export default JumboTron;
