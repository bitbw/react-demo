import React, { Component } from "react";
import Count from "./components/Count";
import Preson from "./components/Person";
export default class index extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count />
        <hr></hr>
        <Preson />
      </div>
    );
  }
}
