import React, { useContext } from 'react';

// 步骤一
const ThemeContext = React.createContext('light')

class App extends React.Component {

  render() {
    return (
      // 步骤二
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  // 中间组件
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {

  // class组件中使用Context 
  static contextType = ThemeContext;

  render() {
    return <Button theme={this.context} />
  }
}

function Button() {
  const theme = useContext(ThemeContext);
  // 函数式组件中使用Context 
  return (
    <button> {theme}</button>
  )
}

export default App;
