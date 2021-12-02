import { Button } from 'antd';
import React, { useMemo, useState } from 'react'

const calcNumber = (counter) => {
  console.log("calcNumber计算数字总和");
  let total = 0;
  for (let i = 0; i <= counter; i++) {
    total += i;
  }
  return total;
}

export default function UseMemoHookDemo() {
  const [counter, setCounter] = useState(10);
  const [show, setShow] = useState(true);

  const total = useMemo(() => {
    return calcNumber(counter);
  }, [counter])

  return (
    <div>

      <p>计算数字的和{total}</p>
      <Button onClick={e => setCounter(counter + 1)}>+1</Button>
      <Button onClick={e => setShow(!show)}>切换title</Button>
      {
        show && <h2>UseMemoHookDemo</h2>
      }

    </div>
  )
}
