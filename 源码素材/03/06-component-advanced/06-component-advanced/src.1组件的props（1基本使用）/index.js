import React from 'react'
import ReactDOM from 'react-dom'

/* 
  props
*/

// 2 接收数据
class Hello extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>props: {this.props.age}</h1>
      </div>
    )
  }
}

// 1 传递数据
ReactDOM.render(<Hello name="rose" age={19} />, document.getElementById('root'))

/* 
// 2 接收数据
const Hello = props => {
  // props是一个对象
  console.log(props)
  return (
    <div>
      <h1>props：{props.name}</h1>
    </div>
  )
}

// 1 传递数据
ReactDOM.render(<Hello name="jack" age={19} />, document.getElementById('root')) */
