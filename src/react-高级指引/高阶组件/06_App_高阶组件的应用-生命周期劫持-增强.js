import React, { PureComponent } from 'react'

function withTime(WrappedComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date();
    }

    componentDidMount() {
      this.endTime = new Date();
      const intervel = this.endTime - this.beginTime;
      console.log(WrappedComponent.name + "组件渲染时间: " + intervel);
    }

    render() {
      return <WrappedComponent />
    }
  }
}

class Home extends PureComponent {

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class About extends PureComponent {

  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

const EnhanceAbout = withTime(About);
const EnhanceHome = withTime(Home);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome />
        <EnhanceAbout />
      </div>
    )
  }
}
