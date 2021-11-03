import React from 'react';
import HOCCpn from './react-高级指引/高阶组件/06_App_高阶组件的应用-生命周期劫持-增强'

function App(props) {
  return (
    <HOCCpn {...props} />
  )
}

App.displayName = 'AppCpn'

export default App;
