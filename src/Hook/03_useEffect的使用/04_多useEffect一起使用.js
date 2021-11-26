import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function MultiEffectHook() {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log('修改dom' + counter);
  }, [counter])

  useEffect(() => {
    console.log("订阅一些事件");
    return () => {
      console.log("取消订阅事件");
    }
  }, [])

  useEffect(() => {
    console.log('发送网络请求');
  }, [])

  return (
    <div>
      <h2>MultiEffectHook</h2>
      <h2>当前计数{counter}</h2>
      <Button onClick={e => { setCounter(counter + 1) }}>+1</Button>

      <h2>{isShow ? '已登录' : '未登录'}</h2>
      <Button onClick={e => { setIsShow(!isShow) }}>{isShow ? '登录' : '注销'}</Button>
    </div>
  )
}
