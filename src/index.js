import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { NameForm, EssayForm, FlavorForm, Reservation } from "./from";
import { Game } from "./game";
import { Calculator } from "./stateRaise";

// ReactDOM.render(<Game />, document.querySelector(".game-container"));

// // ========================================



function Container() {
  return (
    <div id="container">
      {/* <div className="game-container"><Game /></div>
      <NameForm></NameForm>
      <EssayForm></EssayForm>
      <FlavorForm  test="666"/> 
      <Reservation />*/}
      <Calculator/>
    </div>
  );
}

ReactDOM.render(<Container />, document.querySelector("#root"));
// ReactDOM.render(<input value="hi" />, document.querySelector("#root"));

// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, document.querySelector("#root"));
// }, 1000);
