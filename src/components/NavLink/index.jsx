import { NavLink } from "react-router-dom";

import React, { Component } from "react";

export default class MyNavLink extends Component {
  render() {
    return <NavLink activeClassName="active" className="list-group-item" {...this.props}></NavLink>;
  }
}
