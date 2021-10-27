import React, { useEffect, useState } from 'react';

function App() {

  // 不要在循环，条件或嵌套函数中调用 Hook
  const [name, setName] = useState('Marry');
  useEffect(function persistForm() {
    localStorage.setItem('formData', name)
  }, [name]);

  const [surname, setSurnam] = useState('Poppins');
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  }, [name, surname])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeSurname(e) {
    setSurnam(e.target.value)
  }

  return (
    <div>
      <div>
        name <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        surname <input type="text" onChange={(e) => setSurnam(e.target.value)} />
      </div>
      <br />
      <div>
        name <input type="text" onChange={(e) => handleChangeName(e)} />
      </div>
      <div>
        surname <input type="text" onChange={(e) => handleChangeSurname(e)} />
      </div>
    </div>
  )
}

export default App;
