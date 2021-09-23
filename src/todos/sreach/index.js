import React, { Component } from "react";
import "./index.css";
export default class Sreach extends Component {
  handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.props.addTodo();
      this.props.changeTodoName("")
    }
  };
  render() {
    const { todoName } = this.props;
    return (
      <div className="todo-header">
        <input
          type="text"
          value={todoName}
          onChange={(e) => this.props.changeTodoName(e.target.value)}
          onKeyDown={this.handleOnKeyDown}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
