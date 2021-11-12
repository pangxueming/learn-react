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
                key={item}
                timeout={500}
                classNames="item"
              >
                <div>
                  {item}
                  <Button onClick={e => this.removeItem(index)}>-</Button>
                </div>
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

  removeItem(index) {
    const newNames = [...this.state.names]
    newNames.splice(index, 1)
    // array.splice(start number,length) 返回值是被删除的值 该方法会改变原数组
    this.setState({
      names: newNames
    })
  }
}
