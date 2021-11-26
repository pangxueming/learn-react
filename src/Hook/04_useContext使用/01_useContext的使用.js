import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

export default function ContextHookDemo() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log(theme);
  console.log(user);
  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  )
}
