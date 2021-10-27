import React, { Component, useContext } from 'react'

const ContextProps = React.createContext({ name: 'zhangsan' });

function Lubenwei() { // Consumer方式
  return (
    <ContextProps.Consumer>
      {
        value => {
          return (
            <h2>{value.name}</h2>
          )
        }
      }
    </ContextProps.Consumer>
  )
}

function Pritice() { //hook 方式
  const data = useContext(ContextProps)
  console.log(data);
  return (
    <h2>{data.age}</h2>
  )
}

function Chenhaiwang() {
  return (
    <div>
      <Lubenwei />
      <Pritice />
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <ContextProps.Provider value={{ name: "lisi", age: 18 }}>
        <Chenhaiwang />
      </ContextProps.Provider>
    )
  }
}

App.contextType = ContextProps;
