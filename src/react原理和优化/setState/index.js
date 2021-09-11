/*
 * @Description: setStete 
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-05 20:59:50
 */
import React from 'react'
/**
 * 1.setState 是异步更新的 调用setState 后无法立刻获取 state 中的值
 * 2.推荐语法：推荐使用回调函数形式更新state，因为回调函数中的state中的值
 * 3.setState的第二个参数 状态更新后并且重新渲染后，立即执行 在componentDidUpdate执行
 * 与vue 中的this.$nextTick 差不多
 */
class App extends React.Component {
    state = {
        count: 1
    }

    handleClick = () => {
        // 此处，更新state
        /* this.setState({
          count: this.state.count + 1 // 1 + 1
        })
       //  这里的 this.state.count 仍未改变
        this.setState({
          count: this.state.count + 1 // 1 + 1
        }) */

        // 推荐语法：
        // 注意：这种语法也是异步更新state的！
        this.setState((state, props) => {
            return {
                count: state.count + 1 // 1 + 1
            }
        })
        this.setState((state, props) => {
            console.log('第二次调用：', state)
            return {
                count: state.count + 1
            }
        },
            // 状态更新后并且重新渲染后，立即执行：
            () => {
                console.log('状态更新完成：', this.state.count) // 2
                console.log(document.getElementById('title').innerText)
                document.title = '更新后的count为：' + this.state.count
            }
        )
        console.log('count：', this.state.count) // 1
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                <h1 id="title">计数器：{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}


export default App