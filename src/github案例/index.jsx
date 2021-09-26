/*
 * @Description:
 * @Autor: Bowen
 * @Date: 2021-09-26 20:11:43
 * @LastEditors: Bowen
 * @LastEditTime: 2021-09-26 20:34:31
 */
import React, { Component } from "react";
import List from "./component/List";
import Search from "./component/Search";

export default class GithubQuery extends Component {

  render() {
    return (
      <div id="app">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    );
  }
}
