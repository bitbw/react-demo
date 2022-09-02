import React, { useState, useEffect, useRef, Fragment, useMemo } from "react";
/*
1. React Hook/Hooks是什么?
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
2. 三个常用的Hook
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
 */
// useState
function UseStateTest({ status }) {
  console.log("Bowen: UseStateTest -> status", status);
  // useState 接收 initState 返回数组 [0] = state, [1] = setState
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // 两种写法
    // 1.直接传入 newState
    // setCount(count + 1);
    // 2.回调函数接收 perState 返回值 newState
    setCount((c) => c + 1);
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log(
      "---- UseStateTest ---- componentDidMount and componentDidUpdate"
    );
    document.title = `You clicked ${count} times`;
    // 监听 count 变化才调用
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
// useEffect
/*
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue])
        // 数组中监听 stateValue 变化再调用回调
        // 如果指定的是[], 回调函数只会在第一次render()后执行 (相当于componentDidMount)
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
*/
function UseEffecTest() {
  // useState 接收 initState 返回数组 [0] = state, [1] = setState
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("---- UseEffecTest ---- setInterval componentDidMount");
    const timerId = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
    return function clearTimer() {
      clearInterval(timerId);
      console.log("---- UseEffecTest ---- clearInterval componentDidUnMount");
    };
  }, []);

  return (
    <div>
      <p> {count} times</p>
    </div>
  );
}

// useRef
/*
1. ref 只能用在 dom 上无法用于 组件上
2. useRef(null).current 指向元素
*/

function UseRefTest() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" className="inputEl" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
// useMemo
/* 
把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。
这种优化有助于避免在每次渲染时都进行高开销的计算。
useMemo 相当于 compute + watch
*/
function UseMemoTest() {
  let [a, seta] = useState(0);
  let [b, setb] = useState(0);
  let [c, setc] = useState(0);
  const memoizedValue = useMemo(() => {
    console.log("useMemo");
    setc(() => a + b);
    return a + b;
  }, [a, b]);
  return (
    <>
      <div>a=== {a}</div>
      <div>b=== {b}</div>
      <div>c=== {c}</div>
      <div>memoizedValue=== {memoizedValue}</div>
      <button onClick={() => seta((a) => ++a)}>a++</button>
      <button onClick={() => setb((b) => ++b)}>b++</button>
    </>
  );
}

export default function HooksTest() {
  const [status, setStatus] = useState(true);
  return (
    <Fragment>
      <UseMemoTest></UseMemoTest>
      <hr></hr>
      <UseStateTest status={status} />
      <hr></hr>
      {status ? <UseEffecTest /> : ""}
      <button onClick={() => setStatus((s) => !s)}>切换组件</button>
      <UseRefTest />
    </Fragment>
  );
}
