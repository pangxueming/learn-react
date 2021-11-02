import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: 'zhangsan',
      password: '',
      valid: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            <input type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.changeText(e)} />
          </label>
          <br />
          <label htmlFor="password">
            密码：
            <input type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.changeText(e)} />
          </label>
          <br />
          <label htmlFor="valid">
            用户名：
            <input type="text"
              id="valid"
              name="valid"
              value={this.state.valid}
              onChange={(e) => this.changeText(e)} />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  changeText(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}
