"use client";
import React, {useState, useContext, useEffect, useMemo} from 'react';
import { Todos } from '@/@types/Todo';
import NotifyError from '../Notifications/NotifyError';
import NotifySuccess from '../Notifications/NotifySuccess';
import toast from 'react-hot-toast';
import { supabase } from '@/lib/supabaseClient';

import { TodoListContext } from '@/context/AddTodoContext';

const TodoCard = ({todo}:{todo:Todos}) => {
  const [todos, settodos] = useContext(TodoListContext);
  
  const memoizeTodo = useMemo(() => todo,[todo])
  const memoizedList = useMemo(() => todos, [todos]);
  // ___State used for deleting todos
    const [deleteStatus, setdeleteStatus] = useState(false);
    const [doneStatus, setdoneStatus] = useState(false);

      useEffect(() => {
        if(deleteStatus) {
          const deleteData = async() => {
            const response = await supabase.from("todos").delete().eq("id",memoizeTodo.id).select()
            if(response.error) {
              toast.custom(<NotifyError message={`Error deleting ${memoizeTodo.todo_title} from list `}/>)
            }
            toast.custom(<NotifySuccess message={`${memoizeTodo.todo_title} successfully deleted from list `}/>)
            const newList = todos.filter((newTodo:Todos) => {
              return newTodo.id !== todo.id ;
            })
            settodos(newList)
            setdeleteStatus(false)
          }

          deleteData()
        }

      },[deleteStatus, memoizeTodo, memoizedList]);

      
      useEffect(() => {
        if(doneStatus) {
          const markAsDone = async () => {
            const response = await supabase.from("todos").update({completed:true}).eq("id",memoizeTodo.id).select()            
            if(response.error) {
              toast.custom(<NotifyError message={`Error while implementing update `}/>)
            }
            
            toast.custom(<NotifySuccess message={`${memoizeTodo.todo_title} marked as done `}/>)
            setdoneStatus(false)
          }
          markAsDone()
        }
      },[doneStatus, memoizeTodo])

    return (
        <div className={`todo-card w-[80%] p-[20px] text-left bg-blur-1 rounded-[20px] m-auto max-sm:w-[90vw] flex flex-col flex-nowrap justify-start items-start gap-5 ${memoizeTodo.completed? "border-2 border-solid border-green-400": ""}`}>
            <h2 className='font-bold text-[24px]'>{memoizeTodo.todo_title}</h2>
            <p>{memoizeTodo.todo_description}</p>
            <p>Status : {memoizeTodo.completed? "Completed":"Pending"}</p>
            <div>
                <button type='button' className='py-[10px] px-[20px] rounded-[10px] bg-red-600 text-white font-bold text-[0.8rem]' onClick={() => {
                    setdeleteStatus(true)// Changing state for deleting todos
                }}>Delete</button> &nbsp; &nbsp;<button type="button" className='done-btn px-[20px] py-[10px] rounded-[10px] text-white font-bold text-[0.8rem] bg-[rgb(72,231,72)]' onClick={() => {
                  setdoneStatus(true)
                }}>Done</button>&nbsp; &nbsp;<button type="button" className='done-btn px-[20px] py-[10px] rounded-[10px] text-white font-bold text-[0.8rem] bg-black' onClick={() => {
                    // setUpdateStatus(true);
                }}>Update</button>
            </div>
        </div>
    )
}

export default TodoCard;
/* MuhammadTodo */