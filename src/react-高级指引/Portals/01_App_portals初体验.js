import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import './style.css'

class Dailog extends PureComponent {
  render() {
    return (
      ReactDOM.createPortal(
        <div className='dailog'>
          <h2>Dailog内容</h2>
        </div>,
        document.getElementById('dailog'))
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App组件</h2>
        <Dailog />
      </div>
    )
  }
}
