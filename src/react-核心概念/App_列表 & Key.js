import './App.css';

function NumberList(props) {
  return (
    <li>
      <h2>{props.item.title}</h2>
      <p>{props.item.content}</p>
    </li>
  )
}

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ];

  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>
  });

  function HandleClickIndex(index) {
    console.log(index);
  }

  return (
    <ul>
      {
        numbers.map((number, index) => {
          return (
            <li
              key={index}
              onClick={() => HandleClickIndex(index)}
              style={{ marginBottom: '10px' }} >
              {number}
            </li>)
        })
      }
      <br />

      {listItems}

      <h2>组件列表</h2>
      {
        posts.map(item => {
          return <NumberList key={item.id} item={item} />
        })
      }
    </ul>
  );
}

export default App;
