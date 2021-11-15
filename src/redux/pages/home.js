import { Button } from 'antd'
import React, { PureComponent } from 'react'

import store from '../store'
import {
  increment,
  addAction
} from '../store/actionCreators'

export default class Home extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数:{counter}</h2>
        <Button onClick={e => this.increment()}>+1</Button>
        <Button onClick={e => this.addNumber()}>+5</Button>
      </div>
    )
  }

  increment() {
    store.dispatch(increment())
  }

  addNumber() {
    store.dispatch(addAction(5))
  }
}
