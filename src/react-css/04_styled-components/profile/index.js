import React, { PureComponent } from 'react'

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
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
