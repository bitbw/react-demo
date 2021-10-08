import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleClick(type) {
    switch (type) {
      case "back":
        this.props.history.goBack();
        break;
      case "forward":
        this.props.history.goForward();
        break;
      case "go":
        this.props.history.go(-2);
        break;

      default:
        break;
    }
  }
  render() {
    console.log("Bowen: Header -> render -> this.props", this.props);
    return (
      <div>
        <button onClick={() => this.handleClick("back")}>回退</button>
        <button onClick={() => this.handleClick("forward")}>前进</button>
        <button onClick={() => this.handleClick("go")}>go</button>
      </div>
    );
  }
}

export default withRouter(Header);
