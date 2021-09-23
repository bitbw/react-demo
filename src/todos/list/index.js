import React, { Component } from "react";
import "./index.css";
import Itme from "./item";
export default class TodosMain extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <ul className="todo-main">
        {todoList.map((item) => (
          <Itme {...item} deleteItem={this.props.deleteItem} checkedItme={this.props.checkedItme} key={item.id} />
        ))}
      </ul>
    );
  }
}
