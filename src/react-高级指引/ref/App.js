import React, { Component, createRef } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleRel = null;
  }

  render() {
    return (
      <div>
        <h2 ref="titleRef">hello world</h2>
        <h2 ref={this.titleRef}>hello world</h2>
        <h2 ref={arg => this.titleRel = arg}>hello world</h2>
        <button onClick={() => { this.changeText() }}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.refs.titleRef.innerHTML = "卢本伟牛逼";
    this.titleRef.current.innerHTML = '我是陈海王';
    this.titleRel.innerHTML = '我是张三';
  }
}
