import { Button } from 'antd';
import React, { useState } from 'react'

export default function App() {

  const [user, setUser] = useState([
    { id: 100, name: 'zhangsan', age: 21 },
    { id: 101, name: 'lisi', age: 22 }
  ]);

  return (
    <ul>
      {
        user.map((item, index) => {
          return (
            <li key={item.id}>
              姓名:{item.name}
              年龄:{item.age}
              <Button onClick={e => { addAge(index) }}>age+1</Button>
            </li>
          )
        })
      }
      <Button onClick={e => { addUser() }}>添加用户</Button>
    </ul>
  )

  function addUser() {
    const newUser = [...user];
    newUser.push({
      id: newUser.length + 1,
      name: '王五',
      age: Number((Math.random() * 100).toFixed(0))
    })
    setUser(newUser)
  }

  function addAge(index) {
    const newUser = [...user];
    newUser[index].age += 1;
    setUser(newUser);
  }
}
