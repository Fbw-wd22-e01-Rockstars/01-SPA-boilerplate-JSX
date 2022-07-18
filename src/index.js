import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// WHAT: This variable returns contains the html to render
let name = "James";
let age = 12;
let output = (
  <span>
    {name} is {age} years old
  </span>
);

root.render(output);
