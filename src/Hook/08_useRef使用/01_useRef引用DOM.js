import { Button } from 'antd'
import React, { useRef } from 'react'

export default function UseRefHookDemo1() {
  const title = useRef(null)

  function handleRef() {
    console.log(title);
  }

  return (
    <div>
      <h2 ref={title}>UseRefHookDemo1</h2>
      <Button onClick={e => { handleRef() }}>获取ref</Button>
    </div>
  )
}
