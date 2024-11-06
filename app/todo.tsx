import React from 'react';

const TodoCard = ({title,description,deleteFunction, key}:any) => {
  return (
    <div className='todo-card' key={key}>
        <h2 contentEditable>{title}</h2>
        <p contentEditable>{description}</p>
        <button type='button' className='del-btn' onClick={deleteFunction}>Delete</button> &nbsp; &nbsp;<button type="button" className='done-btn'>Done</button>
    </div>
  )
}

export default TodoCard;