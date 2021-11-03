import React, { PureComponent } from 'react'

import profileStyle from './style.module.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <h2 className={profileStyle.title}>我是Profile组件的标题</h2>
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
