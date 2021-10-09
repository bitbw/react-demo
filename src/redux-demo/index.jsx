import React, { Component } from "react";
import Count from "./components/Count";
import Preson from "./components/Person";
export default class index extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr></hr>
        <Preson />
      </div>
    );
  }
}
