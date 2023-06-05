import React, {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Welcome ${name}!`)
  }

  return (
    <div className="App">
      <h1>Welcome! Enter Your Name Below</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Enter Name:</label>
      <input 
          type='text' 
          name='name' 
          id='name' 
          placeholder='Nikola Jokic'
          value={name}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        </form>
        <p>{ message }</p>
    </div>
  );
}

export default App;
