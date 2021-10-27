import React, { useState } from 'react';
import './App.css'

function Container(props) {
  const { data, changeContent } = props;
  const [indey, setIndey] = useState(0);

  return (
    <div className="tab-control">
      {data.map((item, index) => {
        return (
          <span
            key={index}
            className={"tab-item " + (indey === index && 'red')}
            onClick={() => selectItem(index)}>
            {item.title}
          </span>
        )
      })}
    </div>
  )

  function selectItem(index) {
    setIndey(index);
    changeContent(index);
  }
}

function App() {
  const [data] = useState([
    {
      title: '流行',
      content: '流行内容'
    },
    {
      title: '新款',
      content: '新款内容'
    },
    {
      title: '精选',
      content: '精选内容'
    }
  ])
  const [shownContent, setShownContent] = useState(
    data[0].content //默认值
  )
  return (
    <div>
      <Container data={data} changeContent={(index) => changeContent(index)} />
      <h2>{shownContent}</h2>
    </div>
  )

  function changeContent(index) {
    setShownContent(data[index].content)
  }
}

export default App;
