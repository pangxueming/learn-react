import React, { useState } from 'react';

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Colums />
        </tr>
      </table>
    )
  }
}

class Colums extends React.Component {
  render() {
    return (
      <>
        <td>hello</td>
        <td>world</td>
      </>
    )
  }
}

function Glossary(props) {
  console.log(props);
  return (
    <dl>
      {
        props.items.map(item => (
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))
      }
    </dl >
  )
}

function App() {

  const [data, setDate] = useState([
    {
      id: 1,
      term: '张三',
      description: '身高1米8'
    },
    {
      id: 2,
      term: '李四',
      description: '身高1米9'
    },
    {
      id: 3,
      term: '王五',
      description: '身高2米8'
    },
  ])

  return (
    <div>
      <Glossary items={data} />
      <Table />
    </div>
  )
}

export default App;
