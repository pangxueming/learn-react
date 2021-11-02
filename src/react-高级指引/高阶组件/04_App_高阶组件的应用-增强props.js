import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
  nickname: 'xm',
  level: -1,
  region: '广州'
})

function withUser(WrappedComponent) {
  return function (props) {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user} />
          }
        }
      </UserContext.Consumer>
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <h2>Home:{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>About:{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
    )
  }
}

const EnhanceHome = withUser(Home);
const EnhanceAbout = withUser(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ nickname: 'zhangsan', level: 99, region: '中国' }}>
          <EnhanceHome />
          <EnhanceAbout />
        </UserContext.Provider>
      </div>
    )
  }
}
