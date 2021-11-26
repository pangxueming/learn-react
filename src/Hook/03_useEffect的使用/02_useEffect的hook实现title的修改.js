import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

export default function HookCounterChangeTitle() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `当前计数${counter}`

  })
  return (
    <div>
      <h2>当前计数{counter}</h2>
      <Button onClick={e => { setCounter(counter + 1) }}>+1</Button>
    </div>
  )
}
