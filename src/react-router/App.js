import React, { PureComponent } from 'react'
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter
} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
        <NavLink style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : ""
          };
        }} to="/">首页</NavLink>
        <NavLink style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : ""
          };
        }} to="/about">关于</NavLink>
        <NavLink style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : ""
          };
        }} to="/profile">我的</NavLink>
      </BrowserRouter >
    )
  }
}
