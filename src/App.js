import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    // 无需清除的 effect
    document.title = `You click ${count} times`;
  }, [count])
  // useEffect 第二个参数[count]实现性能优化
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  )
}

export default App;
