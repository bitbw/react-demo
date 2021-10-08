import React, { Component } from "react";

export default class Itme extends Component {
  state = {
    isHover: false,
  };
  hanleMouse = (e, isHover) => {
    this.setState(() => ({ isHover }));
  };
  hanleDelete(id) {
    if (window.confirm("确定删除么")) {
      this.props.deleteItem(id);
    }
  }
  render() {
    const { name, id, checked } = this.props;
    const { isHover } = this.state;
    return (
      <li
        // onmouseover、nmouseout：鼠标移动到自身时候会触发事件，同时移动到其子元素身上也会触发事件
        // onmouseenter、onmouseleave：鼠标移动到自身是会触发事件，但是移动到其子元素身上不会触发事件
        onMouseEnter={(e) => this.hanleMouse(e, true)}
        onMouseLeave={(e) => this.hanleMouse(e, false)}
        style={{
          background: isHover ? "#eeeeee" : "",
        }}
      >
        <label>
          <input type="checkbox" checked={checked} onChange={(e) => this.props.checkedItme(id, e.target.checked)} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{
            display: isHover ? "block" : "none",
          }}
          onClick={(e) => this.hanleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
