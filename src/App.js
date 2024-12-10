import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear the input box
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
            />
            <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
