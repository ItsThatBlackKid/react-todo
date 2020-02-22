import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [allTodo, setAllTodo] = useState([])
  const [todo, setTodo] = useState({
    id: null,
    title: null,
    checked: false
  })
  let count = allTodo.length

  const addSingleTodo = (todo) => {
    setAllTodo([...allTodo, todo])
  }

  const setChecked = (id) => {
    const toCheck = allTodo[id]
    toCheck.checked = !toCheck.checked
  }

  return (
    <div className="App">
      <h1>
        React Todo
      </h1>

      <form onSubmit={e => {
        e.preventDefault();
        addSingleTodo({
          ...todo,
          id: count++
        })
      }}>
        <input
          type="textbox"
          id="todo-title"
          value={todo.title}
          placeholder="Write todo here"
          onChange={e =>
            setTodo({
              title: e.target.value
            })
          } />

        <input type="submit" />
      </form>

      <div>
        {
          allTodo.length > 0 ?
            allTodo.map(todo => (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  id={todo.id}
                  checked={todo.checked}
                  onChange={() => setChecked(todo.id)}
                  name={todo.id} />
                <label htmlFor={todo.id}>{todo.title}</label>
              </div>
            )) :
            <h2>
              No Todos, add one above.
            </h2>
        }
      </div>

    </div>
  );
}

export default App;
