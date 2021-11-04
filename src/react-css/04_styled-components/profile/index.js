import React, { PureComponent } from 'react'
import styled from 'styled-components'
/**
 * 1.穿透
 */

const ProfileInput = styled.input.attrs({
  placeholder: 'zhangsan',
  bColor: 'red'
})`
  background-color: skyblue;
  border-color: ${props => props.bColor};
  color:${props => props.color};
`

export default class Profile extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      color: 'purple'
    }
  }

  render() {
    return (
      <div>
        <ProfileInput type="text" color={this.state.color} />
        <h2>我是Profile组件的标题</h2>
        <div>
          <span>setting</span>
          <ul>
            <li>设置列表1</li>
            <li>设置列表2</li>
            <li>设置列表3</li>
          </ul>
        </div>
      </div>
    )
  }
}
