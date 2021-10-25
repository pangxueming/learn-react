import { useState } from 'react';
import './App.css';

function UserGreeting() {
  return (
    <h2>欢迎回来~</h2>
  )
}

function GuestGreeting() {
  return (
    <h2>请先登录~</h2>
  )
}

function Greeting(props) {
  const isLogin = props.isLogin;
  return (
    <div>
      {isLogin ? <UserGreeting /> : <GuestGreeting />}
    </div>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function login() {
    setIsLogin(!isLogin)
  }

  return (
    <div>
      <Greeting isLogin={isLogin} />
      <button onClick={login}>{isLogin ? '退出' : '登录'}</button>
    </div>
  )
}

export default App;
