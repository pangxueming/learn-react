import React from 'react';
import HOCCpn from './react-高级指引/高阶组件/05_App_高阶组件的应用-登录鉴权'

function App(props) {
  return (
    <HOCCpn {...props} />
  )
}

App.displayName = 'AppCpn'

export default App;
