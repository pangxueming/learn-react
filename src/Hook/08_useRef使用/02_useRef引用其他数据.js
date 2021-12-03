import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHookDemo2() {
  const [counter, setCounter] = useState(0)

  const numberRef = useRef(counter);

  useEffect(() => {
    numberRef.current = counter;
  }, [counter])

  return (
    <div>
      {/* <h2 red={numberRef}>numberRef中的值 {numberRef.current}</h2>
      <h2>counter中的值 {counter}</h2> */}

      <h2>counter上一次的值 {numberRef.current}</h2>
      <h2>counter这一次的值 {counter}</h2>
      <Button onClick={e => setCounter(counter + 10)}>+10</Button>
    </div>
  )
}
