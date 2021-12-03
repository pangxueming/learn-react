import React from 'react'

import { useUserContext } from '../hooks/user-hook'

export default function CustomContextShareDemo() {
  const [user, token] = useUserContext();
  console.log(token);
  console.log(user);

  return (
    <div>
      <h2>CustomContextShareDemo</h2>
    </div>
  )
}
