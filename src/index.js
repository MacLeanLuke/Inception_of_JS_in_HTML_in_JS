import React from "react";
import ReactDOM from "react-dom";

const fName = "Luke";
const lName = "MacLean";

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>You are {Math.floor(Math.random() * 32)} years old</p>
  </div>,
  document.getElementById("root")
);
