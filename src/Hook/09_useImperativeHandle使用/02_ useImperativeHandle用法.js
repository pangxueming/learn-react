import { Button, Input } from 'antd'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// ref 作为第二个参数传递给 React.forwardRef 函数中的渲染函数
const FocusInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }))

  return <Input ref={inputRef} placeholder="FocusInput" style={{ width: '30%' }} />
})

export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef();
  return (
    <div>
      <FocusInput ref={inputRef} />
      <Button onClick={e => { inputRef.current.focus() }}>聚焦</Button>
    </div>
  )
}
