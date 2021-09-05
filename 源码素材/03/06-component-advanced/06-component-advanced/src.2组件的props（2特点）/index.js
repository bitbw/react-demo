import React from 'react'
import ReactDOM from 'react-dom'

/* 
  props
*/

// 类组件：
class Hello extends React.Component {
  // 推荐使用props作为constructor的参数！！
  constructor(props) {
    super(props)

    // console.log(this.props)
    console.log(props)
  }

  render() {
    console.log('render：', this.props)

    return (
      <div>
        <h1>props：</h1>
      </div>
    )
  }
}
/* 
const Hello = props => {
  console.log('props：', props)
  props.fn()

  // 修改props的值：错误演示！！！
  // props.name = 'tom'

  return (
    <div>
      <h1>props：</h1>
      {props.tag}
    </div>
  )
}
 */
ReactDOM.render(
  <Hello
    name="rose"
    age={19}
    colors={['red', 'green', 'blue']}
    fn={() => console.log('这是一个函数')}
    tag={<p>这是一个p标签</p>}
  />,
  document.getElementById('root')
)
