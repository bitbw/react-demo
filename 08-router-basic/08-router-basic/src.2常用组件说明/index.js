import React from 'react'
import ReactDOM from 'react-dom'

/* 
  常用组件说明
*/

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'

const First = () => <p>页面一的内容</p>

// 使用Router组件包裹整个应用
const App = () => (
  <Router>
    <div>
      <h1>React路由基础</h1>
      <div>
        {/* 指定路由出口 */}
        <Route path="/first" component={First} />
      </div>
      {/* 指定路由入口 */}
      <Link to="/first">页面一</Link>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
