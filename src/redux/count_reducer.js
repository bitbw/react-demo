/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import { INCREMENT, DECREMENT } from "./constant";
const initstate = 0;
export default function reducer(preState = initstate, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data * 1;
    case DECREMENT:
      return preState - data * 1;
    default:
      return preState;
  }
}
