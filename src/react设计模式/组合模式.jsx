import React from "react";

// function Groups(props) {
//   //   隐式添加props
//   //   const newChildren = props.children.map((item, index) => React.cloneElement(item, { author: "alien", key: index }));
//   //   内外层通信
//   function callback(val) {
//     console.log("Bowen: callback -> val", val);
//   }
//   const newChildren = [];
//   props.children.forEach((item) => {
//     //   判断显示哪些组件
//        // type 指向 Item 构造函数
//     const { type, props } = item || {};
//     if (React.isValidElement(item) && type === Item && props.isShow) {
//       // 通信
//       newChildren.push(React.cloneElement(item, { author: "alien", callback, key: props.name }));
//     }
//   });
//   console.log("Bowen: Groups -> newChildren", newChildren);
//   return newChildren;
// }

// function Item(props) {
//   console.log("Bowen: Item -> props", props);

//   return (
//     <div>
//       名称： {props.name} <button onClick={() => props.callback("let us learn React!")}>点击</button>
//     </div>
//   );
// }

// export default function Test() {
//   return (
//     <div>
//       <Groups>
//         <Item name="《React进阶实践指南》" isShow />
//         <Item name="《Nodejs深度学习手册》" isShow />
//         {null}
//         <div>555</div>
//       </Groups>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////
// 复杂的组合场景
////////////////////////////////////////////////////////////////////////////////////
function Item(props) {
  return (
    <div>
      名称：{props.name} <br />
      作者：{props.author} <br />
      对大家说：{props.mes} <br />
    </div>
  );
}
/* 第二层组合 -> 混入 mes 属性  */
function Wrap(props) {
  return React.cloneElement(props.children, { mes: "let us learn React!" });
}
/* 第一层组合，里面进行第二次组合，混入 author 属性  */
function Groups(props) {
  return <Wrap>{React.cloneElement(props.children, { author: "alien" })}</Wrap>;
}

const Index = () => {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
    </Groups>
  );
};
export default Index;
