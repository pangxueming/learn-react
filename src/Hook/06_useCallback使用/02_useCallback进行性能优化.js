import { Button } from 'antd'
import React, { memo, useCallback, useState } from 'react'

/**
 * useCallback在上面时候使用
 * 场景：在将一个组件中的函数，传递给子元素进行毁掉使用时，使用useCallback对函数进行处理
 * memo的作用跟PureComponent一样
 */

const DiyButton = memo((props) => {
  console.log("DiyButton重新渲染 :" + props.title);
  return <Button onClick={props.click}>+1</Button>
})

export default function CallbackHookDemo() {
  console.log("CallbackHookDemo重新渲染");
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true);

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
      <DiyButton click={increment1} title="第一个按钮" />
      <DiyButton click={increment2} title="第二个按钮" />

      <hr />
      <Button onClick={() => setShow(!show)}>切换</Button>
    </div>
  )
}
