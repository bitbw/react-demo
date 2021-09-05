/*
 * @Description: PropTypes
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-05 15:46:23
 */
import React from 'react'

import PropTypes from 'prop-types';

import { Calculator } from '../stateRaise'

class Test extends React.Component {
    constructor(props) {
        super(props)
        console.log("Bowen ~ file: propTypes.js ~ line 15 ~ Test ~ constructor ~ props", props)
    }
    render() {
        return (
            <div >this name is {this.props.name} {this.props.test}</div>
        )
    }

}

// props校验
Test.propTypes = {
    name: PropTypes.string.isRequired,
    test: PropTypes.element.isRequired,
    // shape 内部属性有就判断 多加的属性也不会报错
    obj: PropTypes.shape({
        name: PropTypes.string.isRequired,
        test: PropTypes.element.isRequired,
    })
}
// props默认值
Test.defaultProps = {
    name: "jeck",
    test: <Calculator />
}


export default Test