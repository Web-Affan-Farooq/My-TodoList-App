"use client"
import React, { useEffect, useState , useContext} from 'react';
import { supabase } from '@/lib/supabaseClient';
import toast from 'react-hot-toast';
import NotifyError from '../Notifications/NotifyError';
import NotifySuccess from '../Notifications/NotifySuccess';

import { TodoListContext } from '@/context/AddTodoContext';

const Fields = () => {

    // ____states for  controlling input fields and add to list button ...
    const [title, settitle] = useState<string>("");
    const [description, setdescription] = useState<string>("")
    const [add, setadd] = useState(false);
    const [todos,setTodos] = useContext(TodoListContext);

    useEffect(() => {
        if (add && title !== "" && description !== "") {
            const AddToList = async () => {
                const response = await supabase.from("todos").insert([
                    {
                        todo_title: title,
                        todo_description: description,
                        completed: false
                    }
                ]);
                if (response.error) {
                    toast.custom(<NotifyError message={`An error occured while adding ${title} to list`} />)
                }
                toast.custom(<NotifySuccess message={`${title} added to list`} />)

                const newList = todos;
                newList.push({
                    todo_title:title,
                    todo_description:description,
                    completed:false,
                    id:"",
                });
                setTodos(newList); // directly assigning new element to state 

                setadd(false)
                settitle("");
                setdescription("");
            }

            AddToList()
        }
    }, [add, title, description, setTodos, todos]); // added set todos and todos

return (
    <form className='w-full flex flex-col flex-wrap justify-center items-center'>
        <input
            type="text"
            name='todoInput'
            id="todo-input"
            placeholder='Enter todos'
            required
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className={`w-[70%] p-[20px] text-black rounded-[10px] bg-blur-2 text-[1rem]`}
        />
        <br />
        <br />
        <br />
        <textarea
            name="description"
            id="description"
            placeholder='Enter description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className={`w-[70%] p-[20px] h-[150px] bg-blur-2 text-black rounded-[10px] text-[1rem]`}
        ></textarea>
        <br />
        <br />
        <button
            className={`py-[10px] px-[30px] rounded-[10px] text-white font-bolder bg-blue-sea`}
            type='button' onClick={() => {
                setadd(true)
            }}>
            Add
        </button>
    </form>
)
}

export default Fields
/*
                const getData = async () => {
                    const response = await supabase.from("todos").select("*");
                    if(response.error) {
                        toast.custom(<NotifyError message={"Error while updating list"}/>)
                        console.error(response.error);
                    }
                    const data = response.data;
                    if(data) setTodos(response.data)
                }
                // getData()
 */