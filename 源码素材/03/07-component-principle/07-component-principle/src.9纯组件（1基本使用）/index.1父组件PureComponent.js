import React from 'react'
import ReactDOM from 'react-dom'

/* 
  组件性能优化：
*/

// 生成随机数
class App extends React.PureComponent {
  state = {
    number: 0
  }

  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }

  render() {
    console.log('父组件中的render')
    return (
      <div>
        <h1>随机数：{this.state.number}</h1>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
