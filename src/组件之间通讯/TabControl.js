import React from "react";
import { useState } from "react";
import "./style.css";

function TabControl(props) {
  const { list, changeContent } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(changeContent);
  return (
    <div className='tab-control'>
      {
        list.map((item, index) => {
          return (
            <div
              key={index}
              className={'tab-item ' + (index === currentIndex ? 'active' : '')}
              onClick={() => changeIndex(index)}>
              <span>{item.title}</span>
            </div>
          )
        })
      }
    </div>
  )

  function changeIndex(index) {
    setCurrentIndex(index);
    changeContent(index);
  }
}

export default TabControl