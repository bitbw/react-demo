/*
 * @Description:  form
 * @Autor: Bowen
 * @Date: 2021-09-02 09:00:59
 * @LastEditors: Bowen
 * @LastEditTime: 2021-09-02 09:03:07
 */

import React from "react";
// import ReactDOM from "react-dom";
// 表单 ========================================
export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log(this);
      this.setState({ value: event.target.value });
    }
  
    handleSubmit(event) {
      console.log(this);
      alert("提交的名字: " + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={(...arg) => this.handleSubmit(...arg)}>
          <label>
            名字:
            <input
              type="text"
              value={this.state.value}
              onChange={(...arg) => this.handleChange(...arg)}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }
  export class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
        html:''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({html: event.target.value});
    }
  
    handleSubmit(event) {
      console.log("Bowen: EssayForm -> handleSubmit -> this.state.value", this.state.value)
      alert('提交的文章: ' + this.state.value);
      event.preventDefault();
    }
    retrunHtml(){
      return <h1> alert('提交的文章) </h1>
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            文章:
            <textarea value={this.state.value} onChange={this.handleChange} />
            <div>6666{ this.state.html }</div>
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }
  export class FlavorForm extends React.Component {
    constructor(props) {
      console.log("Bowen: FlavorForm -> constructor -> props", props)
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('你喜欢的风味是: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            选择你喜欢的风味:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }
  export class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    async handleInputChange(event) {
      const target = event.target;
      const value = target.name === 'isGoing' ? target.checked : target.value;
      console.log("Bowen: Reservation -> handleInputChange -> target.checked", target.checked)
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      // 修改state后无法立刻获取 修改后的state的值 需要在回调函数内获取
      this.setState((state,prop)=> {
      console.log("Bowen: Reservation -> handleInputChange -> state,prop", state,prop)
      })
      console.log("Bowen: Reservation -> handleInputChange -> this.state", this.state)
    }
  
    render() {
      return (
        <form>
          <label>
            参与:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            来宾人数:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }


