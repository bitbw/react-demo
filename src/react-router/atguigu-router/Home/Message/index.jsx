import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* params */}
          {/* <li> 
            <Link to="/home/message/detail/1/message001">message001</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail/2/message002">message002</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail/3/message003">message003</Link>&nbsp;&nbsp;
          </li> */}
          {/* query */}
          {/* <li>
            <Link to="/home/message/detail?id=1&title=message001">message001</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail?id=2&title=message002">message002</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail?id=3&title=message003">message003</Link>&nbsp;&nbsp;
          </li> */}
          {/* state */}
          <li>
            <Link
              to={{
                pathname: "/home/message/detail",
                state: {
                  id: "1",
                  title: "message001",
                },
              }}
            >
              message001
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link
              to={{
                pathname: "/home/message/detail",
                state: {
                  id: "2",
                  title: "message002",
                },
              }}
            >
              message002
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link
              to={{
                pathname: "/home/message/detail",
                state: {
                  id: "3",
                  title: "message003",
                },
              }}
            >
              message003
            </Link>
            &nbsp;&nbsp;
          </li>
        </ul>
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    );
  }
}
