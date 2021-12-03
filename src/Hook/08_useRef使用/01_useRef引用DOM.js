import { Button } from 'antd'
import React, { PureComponent, useRef } from 'react'

class TestCpn1 extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1
    }
  }
  render() {
    return <h2>TestCpn1  {this.state.counter}</h2>
  }
}

function TestCpn2() {
  return <h2>TestCpn2</h2>
}

export default function UseRefHookDemo1() {
  const titleRef = useRef(null);
  const inputRef = useRef(null);
  const testCpn1 = useRef(null);
  const testCpn2 = useRef(null);

  function changeDom() {
    inputRef.current.focus();
    titleRef.current.innerHTML = 'Hello world'
    console.log(testCpn1.current);
    console.log(testCpn2);
  }

  return (
    <div>

      <h2 ref={titleRef}>UseRefHookDemo1</h2>

      <input ref={inputRef} type="text" />

      <TestCpn1 ref={testCpn1} />
      <TestCpn2 ref={testCpn2} />

      <Button onClick={e => { changeDom() }}>获取ref</Button>
    </div>
  )
}
