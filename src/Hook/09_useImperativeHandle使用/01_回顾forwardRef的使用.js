import { Button, Input } from 'antd'
import React, { forwardRef, useRef } from 'react'

// ref 作为第二个参数传递给 React.forwardRef 函数中的渲染函数
const FocusInput = forwardRef((props, ref) => {
  return (
    <Input.Group>
      <Input type="text" size="large" ref={ref} style={{ width: '30%' }} />
    </Input.Group>
  )
})

export default function ForwardRefHookDemo() {
  const inputRef = useRef();
  return (
    <div>
      <FocusInput ref={inputRef} />
      <Button onClick={e => { inputRef.current.focus() }}>聚焦</Button>
    </div>
  )
}
