import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'

import appStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={appStyle.title}>我是app组件的标题</h2>

        <Home />
        <Profile />
      </div>
    )
  }
}
