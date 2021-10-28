import React, { useState } from "react";
import TabControl from "./TabControl";
import "./style.css";

function App() {
  const list = [{
    title: '流行',
    content: '流行内容'
  },
  {
    title: '精选',
    content: '精选内容'
  },
  {
    title: '混合',
    content: '混合内容'
  }]
  const [data, setData] = useState(list[0].content)

  function changeContent(index) {
    setData(list[index].content)
  }

  return (
    <div>
      <TabControl list={list} changeContent={(index) => changeContent(index)} />
      <h2>{data}</h2>
    </div>
  )
}

export default App;