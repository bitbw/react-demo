import React from 'react'
import ReactDOM from 'react-dom'

/* 
  组件性能优化：
*/

// 生成随机数
class App extends React.Component {
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
    return (
      <div>
        <NumberBox number={this.state.number} />
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}

class NumberBox extends React.PureComponent {
  render() {
    console.log('子组件中的render')
    return <h1>随机数：{this.props.number}</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
