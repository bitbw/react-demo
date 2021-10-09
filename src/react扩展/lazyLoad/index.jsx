import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavLink from "../../components/NavLink";
// //1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));

export default class AtguiguRouter extends Component {
  state = { hasError: false };
  /**
    此生命周期在后代组件抛出错误后被调用。 它接收两个参数：
    error —— 抛出的错误。
    info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。
 */
  componentDidCatch(error, info) {
    console.log("Bowen: AtguiguRouter -> componentDidCatch -> error, info", error, info);
    // "组件堆栈" 例子:
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(info.componentStack);
  }
  // 生命周期函数，一旦后台组件报错，就会触发
  static getDerivedStateFromError(error) {
    // 在render之前触发
    // 返回新的state
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return (
        <h1
          style={{
            color: "red",
          }}
        >
          ERROR
        </h1>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<div>Loading...</div>}>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
