/*
 * @Description: renderProp模式
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-05 15:45:20
 */
import React from "react";
import PropTypes from "prop-types";

// 导入图片资源
import src from "../../../assets/images/cat.png"


// renderProp模式 类似 vue 的 slot 模式
export class Mouse extends React.Component {
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
    componentWillUnmount(){
        window.removeEventListener("mousemove",this.handleMouseMove)
    }
    render() {
        // 由 children 决定渲染什么内容 这里只需要将state传入
        return (this.props.children(this.state))
    }
}
Mouse.propTypes = {
    children: PropTypes.func.isRequired
}

export class RenderProp extends React.Component {
    render() {
        return (
            <div>
                {/* 显示位置 */}
                <Mouse>
                    {(mouse) => <h2>当前鼠标位置：X:{mouse.x} Y:{mouse.y}</h2>}
                </Mouse>
                {/* 小猫 */}
                <Mouse>
                    {(mouse) => <img
                        src={src}
                        alt="cat"
                        style={{
                            position: "absolute",
                            left: mouse.x - 64,
                            top: mouse.y - 64
                        }}>
                    </img>}
                </Mouse>

            </div>
        )
    }

}

export default RenderProp