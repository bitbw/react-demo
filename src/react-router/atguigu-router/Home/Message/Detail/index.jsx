import React, { Component } from "react";
import qs from "querystring";
const DetailData = [
  { id: "1", content: "你好，中国" },
  { id: "2", content: "你好，尚硅谷" },
  { id: "3", content: "你好，未来的自己" },
];
export default class Detail extends Component {
  render() {
    console.log(this.props);
    // // 接收params参数
    // const { id, title } = this.props.match.params;
    // // 接收search参数
    // const { id, title }  = qs.parse(this.props.location.search.slice(1));
    // // 接收state参数
    const { id, title } = this.props.location.state;
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
    });
    return (
      <ul>
        <li>Detail</li>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
