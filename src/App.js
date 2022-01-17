import React, { useState } from 'react';
import './App.css';

import TaskCard from './components/task-card';

function App() {

  return (
    <div>
      <h1>To Do List</h1>
      <form>
        <label> Task: 
          <input 
            type="text"
          />
        </label>
      </form>
      <TaskCard />
    </div>
  );
}

export default App;
