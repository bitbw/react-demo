import React from 'react'
import ReactDOM from 'react-dom'

/* 
  setState() 推荐语法
*/

class App extends React.Component {
  state = {
    count: 1
  }

  handleClick = () => {
    // 此处，更新state
    /* this.setState({
      count: this.state.count + 1 // 1 + 1
    })
    this.setState({
      count: this.state.count + 1 // 1 + 1
    }) */

    // 推荐语法：
    // 注意：这种语法也是异步更新state的！
    this.setState((state, props) => {
      return {
        count: state.count + 1 // 1 + 1
      }
    })
    this.setState((state, props) => {
      console.log('第二次调用：', state)
      return {
        count: state.count + 1
      }
    })
    console.log('count：', this.state.count) // 1
  }

  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
