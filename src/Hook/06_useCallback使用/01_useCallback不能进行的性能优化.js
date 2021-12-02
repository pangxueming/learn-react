import { Button } from 'antd'
import React, { useCallback, useState } from 'react'

export default function CallbackHookDemo() {

  const [counter, setCounter] = useState(0)

  const increment1 = () => {
    console.log('执行increment1函数');
    setCounter(counter + 1);
  }

  const increment2 = useCallback(() => {
    console.log('执行increment2函数');
    setCounter(counter + 1);
  }, [counter])

  return (
    <div>
      <h2> CallHookDemo {counter}</h2>
      <Button onClick={increment1}>+1</Button>
      <Button onClick={increment2}>+1</Button>
    </div>
  )
}
