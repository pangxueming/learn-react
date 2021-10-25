import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment(e) {
    setCount(count + 1);
  }

  function decrement() {
    if (count <= 0) return;
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h2>计数器{count}</h2>
      <button className="btn btn-bg" onClick={decrement} disabled={count <= 0}
        style={{ marginRight: "10px", color: count <= 0 ? "#666" : "#fff" }}
      >
        -1
      </button>
      <button className="btn btn-bg" onClick={increment}>
        +1
      </button>
    </div>
  );
}

export default App;
