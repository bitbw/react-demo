import React, { Component } from "react";
// 样式
import "./App.css";
import "./App.less";
// 字体
import "@mdi/font/css/materialdesignicons.min.css";
// 官方demo
// import { Game } from "./components/game";
// import FilterableProductTable, { PRODUCTS } from "./components/searchTable";
// import { Calculator } from "./components/stateRaise";
// import { NameForm, EssayForm, FlavorForm, Reservation } from "./components/form";
// import { Comment } from "./components/comment";
// // atguigu demo
// import Todos from "./components/todos";

// // 组件进阶
// import PropTest from "./组件进阶/propTypes";
// import Lifecycle from "./组件进阶/生命周期";
// import RenderProp from "./组件进阶/renderProp和高阶组件/renderProp模式";
// import HighOrderComponent from "./组件进阶/renderProp和高阶组件/高阶组件";
// import PureComponentTest from "./react原理和优化/纯组件";
// // http
// import ProxyTest from "./代理/proxy";
// import GithubQuery from "./github案例";
// // router
// import RouterTest from "./react-router";
// import AtguiguRouter from "./react-router/atguigu-router";
// // redux
// import ReduxDemo from "./redux-demo";
// // ant
// import { DatePicker } from "antd";
// import { Button } from "antd";

// react扩展
import LazyLoad from "./react扩展/lazyLoad/index";
import HooksTest from "./react扩展/hooks/index";
// const obj = {
//   test: <Calculator />,
//   name: "test",
//   age: 15,
// };

// // ========================================

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 
        <div className="game-container">
            <Game />
        </div>
        <NameForm></NameForm>
        <EssayForm></EssayForm>
        <FlavorForm  test="666"/> 
        <Reservation />
        <Calculator/>
        <Comment obj={obj} />
        <PropTest obj={obj}/>
        <Lifecycle/>
        <RenderProp />
        <HighOrderComponent/>
        <PureComponentTest />
        <FilterableProductTable products={ PRODUCTS }/>
        <RouterTest/>
        <Todos />
        <ProxyTest/>
        <GithubQuery/>
        <AtguiguRouter/>
        <DatePicker/>
        <Button type="primary">Button</Button>
        <ReduxDemo />
        <LazyLoad />*/}
        <HooksTest />
      </div>
    );
  }
}
