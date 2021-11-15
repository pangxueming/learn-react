import { Button } from 'antd'
import React, { PureComponent } from 'react'

import store from '../store'
import {
  decrement,
  subAction
} from '../store/actionCreators';

export default class About extends PureComponent {

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
    const { counter } = this.state;
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数:{counter}</h2>
        <Button onClick={e => this.decrement()}>-1</Button>
        <Button onClick={e => this.subNumber()}>-5</Button>
      </div>
    )
  }

  decrement() {
    store.dispatch(decrement())
  }

  subNumber() {
    store.dispatch(subAction(5))
  }
}
