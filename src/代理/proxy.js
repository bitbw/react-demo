import React, { Component } from "react";
import axios from "axios";
export default class ProxyTest extends Component {
  getStudentData = () => {
    // 请求给  http://localhost:3000 代理服务器中转 ->匹配api2-> http://localhost:5000
    // 代理发送的请求 http://localhost:5000/students
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };

  getCarData = () => {
    // 请求给  http://localhost:3000 代理服务器中转->匹配/api2-> http://localhost:5001
    // 代理发送的请求 http://localhost:5001/cars
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  getStudentData2 = () => {
    // 请求给  http://localhost:3000 代理服务器中转->匹配/api3-> http://localhost:5003
    // 代理发送的请求 http://localhost:5003/students
    axios.get("http://localhost:3000/api3/students").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getStudentData2}>点我获取学生数据2</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}
