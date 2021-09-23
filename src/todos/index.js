import React, { Component } from "react";

import List from "./list";
import Footer from "./footer";
import Sreach from "./sreach";
import "./index.css";
export default class Todos extends Component {
  state = {
    todoName: "",
    todoList: [],
  };
  handleChangeTodoName = (value) => {
    this.setState(() => ({ todoName: value }));
  };
  handleAddTodo = () => {
    const todoItme = {
      id: Math.random() * Date.now(),
      checked: false,
      name: this.state.todoName,
    };
    this.setState(() => ({ todoList: [todoItme, ...this.state.todoList] }));
  };
  hanldeDeleteItem = (id) => {
    this.setState(() => ({
      todoList: this.state.todoList.filter((item) => item.id !== id),
    }));
  };
  handleCheckedItme = (id, checked) => {
    this.setState(() => ({
      todoList: this.state.todoList.map((item) => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return { ...item };
      }),
    }));
    console.log("Bowen: Todos -> handleCheckedItme -> id, checked", id, checked);
  };
  handleCheckTodoAll = (checked) => {
    console.log("Bowen: Todos -> handleCheckTodoAll -> checked", checked)
    this.setState(() => ({
      todoList: this.state.todoList.map((item) => ({ ...item, checked })),
    }));
  };
  handleClearTodoed = () => {
    this.setState(() => ({
      todoList: this.state.todoList.filter((item) => !item.checked),
    }));
  };
  render() {
    const { todoName, todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Sreach todoName={todoName} changeTodoName={this.handleChangeTodoName} addTodo={this.handleAddTodo} />
          <List todoList={todoList} deleteItem={this.hanldeDeleteItem} checkedItme={this.handleCheckedItme} />
          <Footer todoList={todoList} checkTodoAll={this.handleCheckTodoAll} clearTodoed={this.handleClearTodoed} />
        </div>
      </div>
    );
  }
}
