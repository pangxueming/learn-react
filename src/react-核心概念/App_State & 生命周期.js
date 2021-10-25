import './App.css';
import React, { useEffect, useState } from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log();
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>pros时间：{this.props.date.toLocaleTimeString()}</h2>
        <h2>state时间：{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(t)
    };
  }, []);

  return (
    <div>
      <Clock date={time} />
    </div>
  )
}

export default App;
