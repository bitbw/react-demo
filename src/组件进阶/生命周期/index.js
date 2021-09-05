/*
 * @Description: 生命周期
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-05 14:11:53
 */
import React from "react";

export class Lifecycle extends React.Component {
    constructor(props) {
        console.log('--父组件--生命周期钩子函数：1 constructor')
        super(props)
        // 初始化state
        // 处理this指向问题
        this.state = {
            count: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件 dom 挂载完成
    componentDidMount() {
        // 发送请求
        // 操作DOM 同 vue mount
        console.log('--父组件--生命周期钩子函数：3 componentDidMount')
        // axios.get('http://api.....')
        // const title = document.getElementById('title')
        // console.log(title)
    }
    // 组件卸载阶段 （清除定时器等）
    componentWillUnmount() {}
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    // 组件更新后
    componentDidUpdate(perProp, preState) {
        console.log('--父组件--生命周期钩子函数：组件更新 2 componentDidUpdate')
        // console.log("--父组件--perProp,preState", perProp, preState)
        // console.log("--父组件--this.props this.state", this.props, this.state)
    }
    render() {
        console.log('--父组件--生命周期钩子函数：2 组件更新 1  render')
        // 错误演示！！！ 不要在render中调用setState()
        // this.setState({
        //   count: 1
        // })
        let coount = this.state.count > 3 ? <h1> 豆豆不行了</h1> : <Counter count={this.state.count} />
        return (
            <div>
                {coount}
                <button id="btn" onClick={this.handleClick}>打豆豆</button>
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        console.log('--子组件--生命周期钩子函数：1 constructor')
        super(props)
        this.state = {
            displayCount: 1
        }
    }
    // 组件挂载后
    componentDidMount() {
        console.log('--子组件--生命周期钩子函数：3 componentDidMount')
        this.timer = setInterval(console.log, 500, "定时器正在执行")
    }
    // 组件卸载阶段 （清除定时器等）
    componentWillUnmount() {
        console.log('--子组件--生命周期钩子函数：4 componentWillUnmount')
        clearInterval(this.timer)
        console.log("清除定时器")
    }
    // 组件更新后
    // 注意：如果要调用 setState() 更新状态，必须要放在一个 if 条件中
    // 因为：如果直接调用 setState() 更新状态，也会导致递归更新！！！
    componentDidUpdate(perProp, preState) {
        console.log('--子组件--生命周期钩子函数：组件更新 2 componentDidUpdate')
        // console.log("--子组件--perProp,preState", perProp, preState)
        // console.log("--子组件--this.props this.state", this.props, this.state)
        // 这里判断props 然后改变state
        // 使用这个方法可以手动的实现vue中的 watch 和 computed  
        // （即对比需要判断的 state 或者 prop 如果前后数据不同就做点什么 ）
        if (perProp.count !== this.props.count) {
            this.setState({
                displayCount: this.props.count + 2
            })
        }
    }
    render() {
        console.log('--子组件--生命周期钩子函数：2 组件更新 1  render')
        return (
            <div>
                <div>displayCount: {this.state.displayCount}</div>
                <h1>统计豆豆被打的次数：{this.props.count}</h1>
            </div>
        )
    }
}

export default Lifecycle