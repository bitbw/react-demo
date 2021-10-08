import React, { Component } from "react";
import Count from "./components/Count";
export default class index extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count />
      </div>
    );
  }
}
