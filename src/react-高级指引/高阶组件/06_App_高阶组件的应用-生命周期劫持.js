import React, { PureComponent } from 'react'

class Home extends PureComponent {

  componentWillMount() {
    this.beginTime = new Date();
  }

  componentDidMount() {
    this.endTime = new Date();
    const intervel = this.endTime - this.beginTime;
    console.log("Hom组件渲染时间: " + intervel);
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class About extends PureComponent {

  componentWillMount() {
    this.beginTime = new Date();
  }

  componentDidMount() {
    this.endTime = new Date();
    const intervel = this.endTime - this.beginTime;
    console.log("Hom组件渲染时间: " + intervel);
  }

  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
