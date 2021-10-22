import React, { useState, Component } from "react";
const ContainerContext = React.createContext();
export default function ContextTest() {
  const [num, setNum] = useState(666);
  return (
    <div>
      <h1>ContextTest</h1>
      <button onClick={() => setNum((num) => num + 1)}>点击+1</button>
      <ContainerContext.Provider value={num}>
        <Child1 />
      </ContainerContext.Provider>
    </div>
  );
}

function Child1() {
  return (
    <div>
      <h1>Child1</h1>
      <Child2 />
    </div>
  );
}
function Child2() {
  return (
    <div>
      <h2>Child2</h2>
      <Child3 />
    </div>
  );
}
function Child3() {
  return (
    <div>
      <h3>Child3</h3>
      <Child4 />
      <Child5 />
    </div>
  );
}
function Child4() {
  return (
    <div>
      <h4>Child4</h4>
      <ContainerContext.Consumer>
        {(value) => {
          console.log("ContainerContext.Consumer", value);
          return <h4>ContainerContext.Consumer :{value}</h4>;
        }}
      </ContainerContext.Consumer>
    </div>
  );
}
class Child5 extends Component {
  static contextType = ContainerContext;
  render() {
    return (
      <div>
        <h4>Child5</h4>
        {/* this.context */}
        <h4>this.context :{this.context}</h4>
        {/* ContainerContext.Consumer */}
        <ContainerContext.Consumer>
          {(value) => {
            console.log("ContainerContext.Consumer", value);
            return <h4>ContainerContext.Consumer :{value}</h4>;
          }}
        </ContainerContext.Consumer>
      </div>
    );
  }
}
