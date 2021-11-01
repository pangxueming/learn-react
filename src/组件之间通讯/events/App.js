import React, { PureComponent } from 'react'
import { EventEmitter } from "events";

const event = new EventEmitter();

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    event.addListener('changeEvent', (msg) => {
      console.log(msg);
      this.setState({
        message: msg
      })
    })
  }
  render() {
    return (
      <div>
        <EventEmit />
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

function EventEmit() {
  return (
    <div>
      <button onClick={() => { changeMessage() }}>改变文本</button>
    </div>
  )

  function changeMessage() {
    event.emit('changeEvent', '我是张三')
  }
}
