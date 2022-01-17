import React, { useState } from 'react';
import './App.css';

import TaskCard from './components/task-card';

let initialValue = {
  title: "",
  steps: [

  ]
}

function App() {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks([
      ...tasks,
      task
    ])
  }

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  console.log(tasks)

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label> Task: 
          <input 
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </label>
        <button>Create Task</button>
      </form>
      {tasks.map(task => (
        <TaskCard task={task} key={task.index}/>
      ))}
    </div>
  );
}

export default App;
