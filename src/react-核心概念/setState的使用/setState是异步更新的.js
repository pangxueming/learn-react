import React, { Component } from 'react';

function Home(props) {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  )
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '你好啊，张三'
    }
  }
  

  render() {
    const { message } = this.state;
    return (
      <div>
        <h2> 当前计数：{message} </h2>
        <button onClick={() => this.changeMessage()}>改变文本</button>
        <Home message={message} />
      </div>
    )
  }

  componentDidUpdate() {
    // 方式二：获取异步更新的state
    console.log(this.state.message);
  }

  changeMessage() {
    // 方式一：获取异步更新的state
    this.setState({
      message: `现在是2021/10/27`
    }, () => {
      console.log(this.state.message);
    });
  }
}
