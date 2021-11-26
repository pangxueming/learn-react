import { Button } from 'antd'
import React, { PureComponent } from 'react'

export default class ClassCounterChangeTitle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    document.title = `当前计数${this.state.counter}`
  }

  componentDidUpdate() {
    document.title = `当前计数${this.state.counter}`
  }

  render() {
    return (
      <div>
        <h2>当前计数{this.state.counter}</h2>
        <Button onClick={e => { this.setState({ counter: this.state.counter + 1 }) }}>+1</Button>
      </div>
    )
  }
}
