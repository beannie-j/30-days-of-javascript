import React from 'react';
import './App.css';

import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>To Do List</header>
      <section>
        <p>What are you doing today?</p>
    </section>
    <Form />
    <ToDoList />
    </div>
  );
}

export default App;
