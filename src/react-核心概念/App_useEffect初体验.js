import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h2>你点击了{count}次</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}

export default App;
