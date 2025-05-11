import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState("")
  const [todolist, setTodolist] = useState([])

  const Addtodo = () => {
    if (input.trim() === '') return;
    const item = {
      id: Date.now(),
      text: input.trim(),
      completed: false
    }
    setTodolist(prev => [...prev, item])
    setInput("")
  }
  const toggleComplete = (id) => {
    setTodolist(todolist.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t))
  }
  const deletetodo = (id) => {
    setTodolist(todolist.filter((t) => (t.id !== id)))
  }

  return (
    <div>
    <h2>Todo List</h2>
      <input type='text'
        placeholder="Enter todo" value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => Addtodo()}>Add</button>
      <ul>
        {todolist.map(t =>
          <li key={t.id}>
            <input type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(t.id)} />
            <span className={t.completed ? "strike" : ""}>{t.text}</span>
            <button onClick={() => deletetodo(t.id)}>Delete</button>
          </li>)}</ul>
    </div>
  );
}

export default TodoList;