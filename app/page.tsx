"use client";
import React, {useState } from 'react';
import TodoCard from './todo';

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<{ title: string; description: string }[]>([]);

  const renderTask = <p>No task available...</p>;

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos); 
  }
  
  // const [remaining, setremaining] = useState(0);
  return (
    <div>
      <div className='container'>
        <h1 className='main-head'>Todo list</h1>
        <br /><br /><br />
        <form>
          <input
            type="text"
            name='todoInput'
            id="todo-input"
            placeholder='Enter todos'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <br />
          <textarea
            name="description"
            id="description"
            placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button
            className='add-btn'
            type='button'
            onClick={() => {
              setTodos([...todos, { title, description }]);
              setTitle("");
              setDescription("");
            }}
          >
            Add
          </button>
        </form>
        <br /><br />
        <div className='main-todo-container'>
          {todos.length <= 0 ? (
            renderTask
          ) : (
            todos.map((todo, index) => (
              <TodoCard
                title={todo.title}
                description={todo.description}
                deleteFunction={() => deleteTodo(index)}
                key={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;