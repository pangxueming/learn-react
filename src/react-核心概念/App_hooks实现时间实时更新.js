import { useState, useEffect } from 'react';
import './App.css';

function Clock(props) {
  const [info, setInfo] = useState('zhangsan');

  return (
    <div>
      <h1>Hello {info}!</h1>
      <button onClick={() => {
        setInfo('pangxueming');
      }}>修改</button>
      <h1>现在是 {props.date.toLocaleDateString()}。</h1>
    </div>
  )
}

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {  // 可以在函数组件内处理生命周期事件，默认情况，每次渲染都会调用该函数
    const t = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {  // 每次卸载都执行此函数，清楚定时器
      clearTimeout(t);
    }
  }, [])

  return (
    <div className="App">
      <Clock date={time}></Clock>
      <h1>{time.toLocaleTimeString()}。</h1>
    </div>
  );
}

export default App;
