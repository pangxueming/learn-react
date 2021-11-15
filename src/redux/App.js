import React, { PureComponent } from 'react'
import { Button } from 'antd'

import Home from './pages/home'

import store from './store/index'
import {
  increment,
  decrement,
  addAction,
  subAction
} from './store/actionCreators'
import About from './pages/about'

export default class App extends PureComponent {

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
    })
  }

  render() {
    return (
      <div>
        app
        <Button onClick={e => this.handleSubcripbe()}>订阅</Button>
        <hr />
        <Home />
        <hr />
        <About />
      </div>
    )
  }

  handleSubcripbe() {
    store.dispatch(increment())
    store.dispatch(decrement())
    store.dispatch(addAction(5))
    store.dispatch(addAction(5))
    store.dispatch(subAction(5))
  }
}
