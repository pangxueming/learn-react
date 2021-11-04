import React, { PureComponent } from 'react'

import classNames from 'classnames';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true
    }
  }
  render() {
    const { isActive } = this.state;
    const isBar = true;
    const errorClass = 'error';
    const warnClass = 0;
    return (
      <div>
        {/* 传统方式 */}
        <h2 className="foo bar baz title">我是标题1</h2>
        <h2 className={'title' + (isActive ? ' active' : '')}>我是标题2</h2>
        <h2 className={['title', (isActive ? 'active' : '')].join(' ')}>我是标题3</h2>

        {/* classnames库的使用 */}
        <h2 className={classNames('foo', 'bar', 'baz', 'title')}>我是标题4</h2>
        <h2 className={classNames({ 'active': isActive, 'bar': isBar }, "title")}>我是标题5</h2>
        <h2 className={classNames('foo', errorClass, warnClass, { 'active': isActive })}>我是标题6</h2>
        <h2 className={classNames(['title', errorClass, { 'bar': isBar }])}>我是标题7</h2>
      </div>
    )
  }
}
