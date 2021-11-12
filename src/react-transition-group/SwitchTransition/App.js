import React, { PureComponent } from 'react'

import { Button } from 'antd';
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { DivWrapper } from './style'

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    }
  }

  render() {
    const { isOn } = this.state;

    return (
      <DivWrapper>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isOn ? 'on' : 'off'}
            classNames='btn'
            timeout={1000}
          >
            <Button onClick={e => this.setState({ isOn: !isOn })}>{isOn ? 'on' : 'off'}</Button>
          </CSSTransition>
        </SwitchTransition>
      </DivWrapper>
    )
  }
}
