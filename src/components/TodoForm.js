import React from 'react'

const TodoForm = ({ input, setInput, todos, setTodos }) => {
    const onHandleChange = (e) => {
        setInput(e.target.value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            id:Math.floor(Math.random() * 1000000),
            title: input,
            isComplete: false}]);
        setInput("");
    };
      return (
    <form onSubmit={onHandleSubmit}>
        <input 
            type="text" 
            placeholder='Enter a Todo' 
            className='task-input' 
            value={input}
            required
            onChange={onHandleChange}
            />
        <button className='submit-btn' type='submit'>Add</button>
    </form>
  )
}

export default TodoForm;