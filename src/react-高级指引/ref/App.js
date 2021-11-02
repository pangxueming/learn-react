import React, { Component, createRef, PureComponent } from 'react'

function RefCpn() {
  return (
    <div>
      <h2>函数式组件Ref</h2>
    </div>
  )
}

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数{this.state.count}</h2>
        <button onClick={() => { this.increment() }}>+1</button>
      </div >
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}


export default class App extends Component {

  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.CounterRef = createRef();
    this.RefCpnRef = createRef();
    this.titleRel = null;
  }

  render() {
    return (
      <div>
        <h2 ref="titleRef">hello world</h2>
        <h2 ref={this.titleRef}>hello world</h2>
        <h2 ref={arg => this.titleRel = arg}>hello world</h2>
        <button onClick={() => this.changeText()}>改变文本</button>

        <hr />
        <Counter ref={this.CounterRef} />
        <br />
        <button onClick={() => this.appBtnClick()}>App按钮</button>

        <hr />
        {/* 使用不了这种方式 */}
        <RefCpn ref={this.RefCpnRef} />
        <button onClick={() => this.appFunBtnClick}>RefCpn按钮</button>
      </div>
    )
  }

  changeText() {
    this.refs.titleRef.innerHTML = "卢本伟牛逼";
    this.titleRef.current.innerHTML = '我是陈海王';
    this.titleRel.innerHTML = '我是张三';
  }

  appBtnClick() {
    this.CounterRef.current.increment();
  }

  appFunBtnClick() {
    console.log(this.RefCpnRef);
  }
}
