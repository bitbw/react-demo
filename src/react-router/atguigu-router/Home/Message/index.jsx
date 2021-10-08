import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Detail from "./Detail";
const datas = [
  {
    id: "1",
    title: "message001",
  },
  {
    id: "2",
    title: "message002",
  },
  {
    id: "3",
    title: "message003",
  },
];
export default class Message extends Component {
  replaceShow = (id, title) => {
    //replace跳转+携带params参数
    //this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`, { id, title });
  };

  pushShow = (id, title) => {
    //push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    //push跳转+携带state参数
    this.props.history.push(`/home/message/detail`, { id, title });
  };
  back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	go = ()=>{
		this.props.history.go(-2)
	}

  render() {
    return (
      <div>
        <ul>
          {/* params */}
          {/* {datas.map((item) => {
            return (
              <li>
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                &nbsp;&nbsp;
              </li>
            );
          })} */}
          {/* query */}
          {/* {datas.map((item) => {
            return (
              <li>
                <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                &nbsp;&nbsp;
              </li>
            );
          })} */}
          {/* state */}
          {datas.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: item,
                  }}
                >
                  {item.title}
                </Link>
                &nbsp;<button onClick={() => this.pushShow(item.id, item.title)}>push查看</button>
                &nbsp;<button onClick={() => this.replaceShow(item.id, item.title)}>replace查看</button>
              </li>
            );
          })}
        </ul>
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

        <Route path="/home/message/detail" component={Detail}></Route>
        
        <button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;
				<button onClick={this.go}>go</button>
      </div>
    );
  }
}
