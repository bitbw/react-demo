/*
 * @Description: 高阶组件
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-05 19:57:28
 */

import React from "react"

// 导入图片资源
import src from "../../../assets/images/cat.png"
/**
 * 高阶组件就是用函数包装一个组件 ，组件prop中获取 包装函数传入的值
 */
/**
 *  获取组件名称
 * @param {*}   component 
 * @returns 
 */
const getName = (component) => {
    // console.log("component", component)
    // console.dir(component)
    return component.displayName || component.name || "HOCComponent"
}
/**
 * @description: 包装函数
 * @param { Component } Component 接受一个组件
 * @return { Component } 返回一个包装好的组件 
 */
const HOCMouse = (Component) => {
    // 该组件提供复用的状态逻辑
    class MouseWrap extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                x: 0,
                y: 0
            }
            this.handleMouseMove = this.handleMouseMove.bind(this)
        }
        handleMouseMove(e) {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener("mousemove", this.handleMouseMove)
        }
        // 需要在组件卸载时移除事件监听 
        componentWillUnmount() {
            window.removeEventListener("mousemove", this.handleMouseMove)
        }
        render() {
            // 将 state 和 prop 都作为 prop 传入 需要包装的组件中 
            return (<Component {...this.state} {...this.props} />)
        }
    }
    // 调试工具会优先使用 displayName 作为 组件名称展示
    MouseWrap.displayName = `HOC${getName(Component)}`
    return MouseWrap
}

// 需要包装的组件
const Position = (props) => <h2>当前鼠标位置：X:{props.x} Y:{props.y}</h2>
const Cat = (props) => <img
    src={src}
    alt="cat"
    style={{
        position: "absolute",
        left: props.x - 64,
        top: props.y - 64
    }}>
</img>

// 包装后的组件
const HOCPosition = HOCMouse(Position)
const HOCCat = HOCMouse(Cat)


export class App extends React.Component {
    render() {
        return (
            <div>
                <HOCPosition  test="1"/>
                <HOCCat />
            </div>
        )
    }

}

export default App