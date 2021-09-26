import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { NameForm, EssayForm, FlavorForm, Reservation } from "./form";
import { Game } from "./game";
import { Calculator } from "./stateRaise";
import { Comment } from "./comment";
import PropTest from "./组件进阶/propTypes";
import Lifecycle from "./组件进阶/生命周期";
import RenderProp from "./组件进阶/renderProp和高阶组件/renderProp模式";
import HighOrderComponent from "./组件进阶/renderProp和高阶组件/高阶组件";
import PureComponentTest from "./react原理和优化/纯组件";
import FilterableProductTable, { PRODUCTS } from "./searchTable";
import RouterTest from "./react-router";
import ProxyTest from "./代理/proxy";
import GithubQuery from "./github案例";

import Todos from "./todos";

// ReactDOM.render(<Game />, document.querySelector(".game-container"));

// // ========================================

function Container() {
  const obj = {
    test: <Calculator />,
    name: "test",
    age: 15,
  };
  return (
    <div id="container">
      {/* <div className="game-container"><Game /></div>
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
      <ProxyTest/>*/}
      <GithubQuery/>
    </div>
  );
}

ReactDOM.render(<Container />, document.querySelector("#root"));
// ReactDOM.render(<input value="hi" />, document.querySelector("#root"));
// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, document.querySelector("#root"));
// }, 1000);
