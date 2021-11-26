import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function EffectHookCancelSubscribe() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("订阅一些事件");
    return () => {
      console.log("取消订阅事件");
    }
  }, [])

  return (
    <div>
      <h2>当前计数{counter}</h2>
      <Button onClick={e => { setCounter(counter + 1) }}>+1</Button>
    </div>
  )
}
