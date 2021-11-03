import React, { PureComponent } from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  font-size:50px;
  color:red;

  .banner{
    background-color: blue;

    span{
      color: #fff;

      &.active{
        color: red;
      }

      &:hover{
        color: green;
      }

      &::after{
        content: 'aaa';
      }
    }
  }
`

const TitleWrapper = styled.h2`
  text-decoration: underline;
`

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是home组件的标题</TitleWrapper>
        <div className="banner">
          <span>轮播图1</span>
          <span>轮播图2</span>
          <span className="active">轮播图3</span>
          <span>轮播图4</span>
        </div>
      </HomeWrapper>
    )
  }
}
