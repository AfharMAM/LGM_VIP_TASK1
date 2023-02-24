import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='container'> 
     <div className='v-center'>
        <Header />
      
      <div>
        <TodoForm 
         input={input}
         setInput={setInput}
         todos={todos}
         setTodos={setTodos}
        />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      </div>
    </div>
    
  );
}

export default App;
