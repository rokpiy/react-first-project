import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
 const [value, setValue] = useState("");
 const [todos, setTodos] = useState([]);
 const onChange = (event) => setValue(event.target.value);
 const onSubmit = (event) => {
  event.preventDefault();
  if (value === "") {
    return;
  }
  setTodos((currentArray) => [value, ...currentArray]);
  setValue("");
  console.log(todos);
 }
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} type="text" placeholder="Write your to do.." />
      <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
