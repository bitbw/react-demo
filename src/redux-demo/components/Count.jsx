import React, { Component } from "react";
//引入action
import { createIncrement, createDecrement, createIncrementAsync } from "../../redux/count_action";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";
const options = [1, 2, 3];
class Count extends Component {
  // state = {
  //   count: 0,
  // };
  // store.subscribe 直接放到index.js store 发生改变 调用 react-dom 的 render
  // componentDidMount() {
  //   // 改变调用 render
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  select = null;
  increment = () => this.props.increment(this.select.value);
  decrement = () => this.props.decrement(this.select.value);
  incrementIfOdd = () => {
    const { count } = this.props;
    if (count % 2 === 0) {
      return;
    }
    this.props.increment(this.select.value);
  };
  incrementAsync = () => this.props.incrementAsync(this.select.value, 500);

  render() {
    const { count } = this.props;
    console.log("Bowen: Count -> render -> this.props", this.props);
    return (
      <div>
        <h2> 当前求和为：{count}</h2>
        <select ref={(r) => (this.select = r)}>
          {options.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        &nbsp; &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

/* 
1.mapStateToProps函数返回的是一个对象；
2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
3.mapStateToProps用于传递状态
*/

/* 
1.mapDispatchToProps函数返回的是一个对象；
2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
3.mapDispatchToProps用于传递操作状态的方法
*/

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state }),

  //mapDispatchToProps的一般写法
  // (dispatch) => ({
  //   increment: (data) => dispatch(createIncrement(data)),
  //   decrement: (data) => dispatch(createDecrement(data)),
  //   incrementAsync: (data) => dispatch(createIncrementAsync(data, 500)),
  // })

  //mapDispatchToProps的简写
  {
    increment: createIncrement,
    decrement: createDecrement,
    incrementAsync: createIncrementAsync,
  }
)(Count);
