import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Home from '../home'
import Profile from '../profile'

const TitleWrapper = styled.h2`
  color: #ccc;
`
const AppButton = styled.button`
  padding: 10px 20px;
  color: #fff;
  background-color: green;
`
// 样式继承
const PrimaryButton = styled(AppButton)`
  background-color: skyblue;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ fontSize: '50px', themeColor: 'yellow' }}>
        App
        <TitleWrapper>我是app组件的标题</TitleWrapper>
        <AppButton>App按钮</AppButton>
        <PrimaryButton>Primary按钮</PrimaryButton>

        <Home />
        <Profile />
      </ThemeProvider>
    )
  }
}
