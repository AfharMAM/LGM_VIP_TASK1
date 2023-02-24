import React from 'react'

const TodoList = ({todos, setTodos}) => {

  const handleDelete = (id) => {
    let updateTasks = [...todos].filter(task => task.id !== id)
    setTodos(updateTasks)
  }

  const handleComplete = (id) => {
    let updateTask = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = true
      }
      return todo;
    })
    setTodos(updateTask)
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
            <li className='list-items' key={todo.id}>
               <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                {todo.isComplete ? <p className='green'> {todo.title}</p>: <p className='red'> {todo.title}</p>}
                <div>
                <button type='submit' className='button-delete' onClick={() => handleDelete(todo.id)}>Delete</button>
                <button className='button-edit' onClick={() => handleComplete(todo.id)}>Complete</button>
                </div>
               </div>
              
            </li>
        )
        )}  
        </ul>  
    </div>
  );
};

export default TodoList; 