import React, { PureComponent } from 'react'

function enhanceRegionProps(WrappedComponent) {
  return function (props) {
    return <WrappedComponent {...props} region="中国" />
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

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="zhangsan" level="18" />
        <EnhanceAbout nickname="lisi" level="19" />
      </div>
    )
  }
}
