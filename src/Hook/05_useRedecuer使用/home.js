import { Button } from 'antd';
import React, { useReducer } from 'react'

import reducer from './reducer'

export default function Home() {

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h2>Home当前计数:{state.counter}</h2>
      <Button onClick={e => dispatch({ type: 'decrement' })}>-1</Button >
      <Button onClick={e => dispatch({ type: 'increment' })}>+1</Button>
    </div >
  )
}
