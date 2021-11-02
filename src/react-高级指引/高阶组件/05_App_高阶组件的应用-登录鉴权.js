import React, { PureComponent } from 'react'

function withAuth(WrappedComponent) {
  function NewCpn(props) {
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent  {...isLogin} />
    } else {
      return <LoginPage />
    }
  }
  NewCpn.displayName = "AuthCpn";
  return NewCpn;
}

class LoginPage extends PureComponent {
  render() {
    return (
      <h2>LoginPage</h2>
    )
  }
}

class CartPage extends PureComponent {
  render() {
    return (
      <h2>CartPage</h2>
    )
  }
}

const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: false
    }
  }

  render() {
    const { isLogin } = this.state
    return (
      <div>
        <AuthCartPage isLogin={isLogin} />
        <button
          onClick={() => this.setState({ isLogin: !isLogin })}>
          {isLogin ? '登出' : '登录'}
        </button>
      </div>
    )
  }
}
