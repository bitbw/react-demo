/*
 * @Description: Router
 * @Autor: Bowen
 * @Date: 2021-09-10 12:43:23
 * @LastEditors: Bowen
 * @LastEditTime: 2021-09-10 13:05:36
 */

// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>
//         {/* Switch 同 switch case 只有一个被匹配 */}
//         {/* Switch 或者说 Route 的位置等于其渲染的 component，  类似在vue中使用 <component is="About"> */}
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about" component={About}></Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  console.log("Bowen: Topics -> match", match)

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components/1`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state/2`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
          {/*  */}
      <Switch>
          {/* 定义 params: topicId */}
        <Route path={`${match.path}/:topicId/:test`}>
          <Topic />
        </Route>
        {/* /topics 默认路由  */}
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
// useParams 同 vue router 中的 params, 是路径参数使用/:name 定义 通过 useParams() 获取
  let params = useParams();
  console.log("Bowen: Topic -> params", params)
  let { topicId } = params
  return <h3>Requested topic ID: {topicId}</h3>;
}
