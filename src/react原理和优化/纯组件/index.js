import React from 'react'
import ReactDOM from 'react-dom'

/* 
  组件性能优化：
  PureComponent 纯组件使用浅对比实现，判断是否需要更新render
  例如：NumberBox2 使用 shouldComponentUpdate 进行（浅对比）实现了 PureComponent
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
  // 正常组件 只要调用 this.setState 当前组件和子组件都会调用 render
  render() {
    return (
      <div>
        <NumberBox2 number={this.state.number} />
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}

class NumberBox extends React.PureComponent {
  // PureComponent 只有 this.setState 后进行浅对比不一样才调用 render
  render() {
    console.log('子组件中的render')
    return <h1>随机数：{this.props.number}</h1>
  }
}
// 使用 shouldComponentUpdate 实现  PureComponent
class NumberBox2 extends React.Component {
  // 通过 shouldComponentUpdate 进行控制 是否调用 render
  shouldComponentUpdate(perProps){
    return this.props.number !== perProps.number

  }
  render() {
    console.log('子组件中的render')
    return <h1>随机数：{this.props.number}</h1>
  }
}

// ReactDOM.render(<App />, document.getElementById('root'))

export default App
