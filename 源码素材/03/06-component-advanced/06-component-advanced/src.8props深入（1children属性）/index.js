import React from 'react'
import ReactDOM from 'react-dom'

/* 
  children 属性
*/

const App = props => {
  console.log(props)
  props.children()

  return (
    <div>
      <h1>组件标签的子节点：</h1>
      {/* {props.children} */}
    </div>
  )
}

ReactDOM.render(
  <App>{() => console.log('这是一个函数子节点')}</App>,
  document.getElementById('root')
)

// children为：jsx或组件
// const Test = () => <button>我是button组件</button>
// const App = props => {
//   console.log(props)
//   return (
//     <div>
//       <h1>组件标签的子节点：</h1>
//       {props.children}
//     </div>
//   )
// }

// ReactDOM.render(
//   <App>
//     {/* <p>我是子节点，是一个p标签</p> */}
//     <Test />
//   </App>,
//   document.getElementById('root')
// )

// children为：文本节点
/* const App = props => {
  console.log(props)
  return (
    <div>
      <h1>组件标签的子节点：</h1>
      {props.children}
    </div>
  )
}

ReactDOM.render(<App>我是子节点</App>, document.getElementById('root')) */
