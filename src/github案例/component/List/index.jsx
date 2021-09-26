import "./index.css";
import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class List extends Component {
  state = {
    userDatas: [],
    loading: false,
  };
  componentDidMount() {
    this.token = PubSub.subscribe("FetchDate", (msg, data) => {
      this.setState(data);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  renderFirst() {
    return <h2>暂无数据 请点击搜索 </h2>;
  }
  renderLoading() {
    return <h2>Loading... </h2>;
  }
  render() {
    const { loading, userDatas } = this.state;
    return (
      <div className="row">
        {loading
          ? this.renderLoading()
          : !userDatas.length
          ? this.renderFirst()
          : userDatas.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <a href={item.html_url} target="_blank" rel="noreferrer">
                    <img src={item.avatar_url} style={{ width: "100px" }} alt={item.login} />
                  </a>
                  <p className="card-text">{item.login}</p>
                </div>
              );
            })}
      </div>
    );
  }
}
