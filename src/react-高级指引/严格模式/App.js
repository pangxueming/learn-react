import React, { PureComponent, StrictMode } from 'react'

//严格模式的作用：
/**
 * 1.识别不安全的生命周期
 * 2.关于使用过时的ref API的警告
 * 3.检查意外的副作用
 * 4.使用飞起的findDOMNode方法
 * 5.检测过时的context API
 */


class Home extends PureComponent {
  // UNSAFE_componentWillMount() {
  // }
  constructor(props) {
    super(props);
    
    this.sum(1, 2);
  }
  render() {
    return (
      <div ref='homeRef'>
        Home
      </div>
    )
  }

  sum(a, b) {
    console.log(a + b);
    return a + b
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log('profile');
  }
  // UNSAFE_componentWillMount() {
  // }

  render() {
    return (
      <div ref='profileRef'>
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}
