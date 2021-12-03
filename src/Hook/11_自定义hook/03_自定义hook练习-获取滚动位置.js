import React from 'react'
import useScrollPosition from '../hooks/scroll-position-hook';

export default function CustomScrollPositionHook() {
  const position = useScrollPosition();
  return (
    <div style={{ padding: '1000px 0' }}>
      <h2 style={{ position: 'fixed', top: 0 }}>CustomScrollPositionHook: {position}</h2>
      <h2>我是峯一号</h2>
    </div>
  )
}
