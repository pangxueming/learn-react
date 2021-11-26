import { Button } from 'antd'
import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0);
  console.log('counterHook渲染');
  return (
    <div>
      <h2>当前计数{counter}</h2>
      <Button onClick={() => setCounter(counter - 1)}>-1</Button>
      <Button onClick={() => setCounter(counter + 1)}>+1</Button>
    </div>
  )
}