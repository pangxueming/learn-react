import React, { PureComponent } from 'react'

function Header() {
  console.log("Header被调用");
  return (
    <div>
      <h2>Header组件</h2>
    </div>
  )
}

function Footer() {
  console.log("Footer被调用");
  return (
    <div>
      <h2>Footer组件</h2>
    </div>
  )
}

class Main extends PureComponent {
  constructor() {
    super();
    this.state = {
      items: [
        '大话西游',
        '大话西游',
        '大话西游',
        '大话西游',
      ]
    }
  }

  render() {
    console.log("Main render被调用");
    return (
      <ul>
        {
          this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
}

export default class App extends PureComponent {

  constructor() {
    super();
    this.state = {
      count: 0,
      message: "hello world"
    }
  }

  render() {
    console.log("App render被调用");
    return (
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
