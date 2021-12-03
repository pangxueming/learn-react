import { Button } from 'antd'
import React from 'react'
import useLocalStorage from '../hooks/localstorage-hook'

export default function CustomDataStorageHookDemo() {
  const [name, setName] = useLocalStorage('name')
  return (
    <div>
      <h2>CustomDataStorageHookDemo:{name}</h2>
      <Button onClick={e => setName('wangwu')}>修改名字</Button>
    </div>
  )
}
