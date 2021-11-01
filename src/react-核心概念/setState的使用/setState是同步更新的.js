import React, { Component } from 'react';

// 其实分两种情况：
// 1.在组件生命周期或React合成事件中，setState是异步的
// 2.在setTimeOut或者原生dom事件中，setSta是同步的

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
        <h2>{message} </h2>
        <button onClick={() => this.changeMessage()}>改变文本</button>
        <button id="btn">改变文本2</button>
        <Home message={message} />
      </div>
    )
  }

  componentDidMount() {
    document.getElementById('btn').addEventListener('click', () => {
      console.log('btn被点击');
      this.setState({
        message: '现在是2021/10/27'
      })
      console.log(this.state.message);
    })
    // this.setState({
    //   message: '现在是2021/10/27'
    // })
    // console.log(this.state.message);
  }

  changeMessage() {
    // 情况一：将setState放入到定时器中
    setTimeout(() => {
      this.setState({
        message: `现在是2021/10/27`
      });
      console.log(this.state.message);
    }, 0);
  }
}
