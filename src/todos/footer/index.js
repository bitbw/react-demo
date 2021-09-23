import React, { Component } from "react";
import "./index.css";
export default class TodosFooter extends Component {
  handleChange = (checked) => {
    this.props.checkTodoAll(checked);
  };
  render() {
    const { todoList } = this.props;
    const todoedList = todoList.filter((item) => item.checked);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={todoedList.length === todoList.length && todoList.length > 0 ? true : false}
            onChange={(e) => this.handleChange(e.target.checked)}
          />
        </label>
        <span>
          <span>已完成{todoedList.length}</span> / 全部{todoList.length}
        </span>
        <button className="btn btn-danger" onClick={this.props.clearTodoed}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
