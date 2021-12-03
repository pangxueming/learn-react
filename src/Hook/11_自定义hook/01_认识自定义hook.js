import React, { useEffect } from 'react'

function Home(props) {
  useLogginLife('Home')
  return <h2>Home</h2>
}

function Profile(props) {
  useLogginLife('Profile')
  return <h2>Profile</h2>
}

export default function CustomLifeHookDemo() {
  useLogginLife('CustomLifeHookDemo')
  return (
    <div>
      <Home />
      <Profile />
      <h2>CustomLifeHookDemo</h2>
    </div>
  )
}

function useLogginLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);
    return () => {
      console.log(`${name}组件被销毁了`);
    }
  }, [name])
}