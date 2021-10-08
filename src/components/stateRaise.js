/*
 * @Description: 状态提升
 * @Autor: Bowen
 * @Date: 2021-09-02 16:58:40
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-05 13:50:44
 */
import React from "react";
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};
export class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    // this.state.temperature = 66666;
  }

  render() {
    window.test = this;
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
/**
 * @description: 到摄氏度
 * @param {*} fahrenheit  华氏度
 * @return {*}
 */
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
/**
 * @description:  到华氏度
 * @param {*} celsius  摄氏
 * @return {*}
 */
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
/**
 * @description: 尝试转换
 * @param {*} temperature
 * @param {*} convert
 * @return {*}
 */
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
