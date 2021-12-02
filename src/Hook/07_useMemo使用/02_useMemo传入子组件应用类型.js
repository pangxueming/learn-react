import { Button } from 'antd';
import React, { memo, useMemo, useState } from 'react'

const Info = memo((props) => {
  console.log('Info组件被重新渲染');
  return <h2>姓名：{props.info.name}年龄：{props.info.name}</h2>
})

export default function UseMemoHookDemo2() {
  const [show, setShow] = useState(true);

  const info = useMemo(() => {
    return { name: 'zhangsan', age: 18 }
  }, [])

  return (
    <div>
      <Info info={info} />
      <Button onClick={e => setShow(!show)}>切换title</Button>
      {
        show && <h2>UseMemoHookDemo</h2>
      }

    </div>
  )
}
