import React, { useState, useEffect } from "react";

const TodoWithTimer = () => {
  const [input, setInput] = useState("");
  const [minutes, setMinutes] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!input || !minutes) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      timeLeft: parseInt(minutes) * 60, // convert to seconds
      isRunning: true
    };
    setTodos([...todos, newTodo]);
    setInput("");
    setMinutes("");
  };

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.isRunning && todo.timeLeft > 0) {
            return { ...todo, timeLeft: todo.timeLeft - 1 };
          }
          return todo;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTimer = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isRunning: !todo.isRunning } : todo
      )
    );
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>📝 Todo with Timer</h2>
      <input
        type="text"
        placeholder="Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          >
            <strong>{todo.text}</strong>
            <div>⏱ {formatTime(todo.timeLeft)}</div>
            <button onClick={() => toggleTimer(todo.id)}>
              {todo.isRunning ? "Pause" : "Resume"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWithTimer;
