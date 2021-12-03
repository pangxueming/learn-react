import { Button } from 'antd';
import React, { useEffect, useState } from 'react'

export default function UseEffectCounterDemo() {

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (counter === 0) {
      setCounter(Math.random() + 100)
    }
  }, [counter])

  return (
    <div>
      <h2>数字:{counter}</h2>

      <Button onClick={e => { setCounter(0) }}>修改数字</Button>
    </div>
  )
}
