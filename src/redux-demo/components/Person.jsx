import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddPerson } from "../../redux/actions/person";

class Person extends Component {
  nameInput = null;
  ageInput = null;
 
  handleAddPerson = () => {
    const name = this.nameInput.value;
    const age = this.ageInput.value;
    const id = Math.random() * Date.now();
    this.props.addPerson({
      name,
      age,
      id,
    });
  };
  render() {
    console.log("Bowen: Person -> render -> this.props", this.props);
    const { count, persons } = this.props;
    return (
      <div>
        <h2>person 组件 count:{count}</h2>
        <input type="text" ref={(i) => (this.nameInput = i)} placeholder="请输入名名字" />
        <br />
        <input type="text" ref={(i) => (this.ageInput = i)} placeholder="请输入年龄" />
        <br />
        <button onClick={this.handleAddPerson}>添加</button>
        <br />
        <ul>
          {persons.map((item) => (
            <li key={item.id}>
              姓名：{item.name}---年龄：{item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    count: state.count,
    persons: state.persons,
  }),
  {
    addPerson: createAddPerson,
  }
)(Person);
