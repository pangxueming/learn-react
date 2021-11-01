import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: 'zhangsan', age: 21 },
        { name: 'lisi', age: 22 },
        { name: 'wangwu', age: 231 },
        { name: 'zhaoliu', age: 25 },
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return <li key={item.name}>姓名：{item.name} 年龄：{item.age}</li>
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }

  insertData() {
    const data = { name: "lixing", age: 18 }

    this.setState({
      friends: [...this.state.friends, data]
    })
  }
}
