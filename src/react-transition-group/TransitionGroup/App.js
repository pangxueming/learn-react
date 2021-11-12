import React, { PureComponent } from 'react'
import { Button } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { DivWrapper } from './style'

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      names: ['zhangsan', 'lisi', 'wangwu']
    }
  }

  render() {
    const { names } = this.state;

    return (
      <DivWrapper>
        <TransitionGroup>
          {names.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="item"
              >
                <li key={index}>{item}</li>
              </CSSTransition>)
          })}
        </TransitionGroup>
        <Button onClick={e => this.addName()}>+name</Button>
      </DivWrapper>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'zhaoliu']
    })
  }
}
