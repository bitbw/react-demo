/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
    3.是主要的修改store数据函数
*/
import { ADD_PERSON } from "../constant";
const initstate = [{ id: "test", name: "test", age: 10 }];
export default function reducer(preState = initstate, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
