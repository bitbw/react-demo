import React from 'react'
import ReactDOM from 'react-dom'

/* 
  模糊匹配模式
*/

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <p>进入页面的时候，你能看到我吗？</p>
const Login = () => <p>我是Login组件的内容</p>

const App = () => (
  <Router>
    <div>
      <h1>默认路由</h1>
      <Link to="/first/a/b/c">登录页面</Link>

      {/* 默认路由 */}
      <Route path="/" component={Home} />
      <Route path="/first" component={Login} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
