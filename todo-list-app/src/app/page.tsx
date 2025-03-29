
"use client";
import React, { useEffect, useState } from 'react';
import TodoCard from '@/components/TodoCard/TodoCard';
import { Todos } from '@/@types/Todo';
import NotifyError from '@/components/Notifications/NotifyError';
import toast from 'react-hot-toast';
import Fields from '@/components/Fields/Fields';
import { supabase } from '@/lib/supabaseClient';

const Page = () => {
  const [todos, settodos] = useState<Todos[]>([]) // __ for storing todo array

  useEffect(() => {
    const fetchData = async () => {
      const response = await supabase.from("todos").select("*")
      // console.log(response.data);
      const data = response.data;
      if (data) {
        settodos(data)
        // console.log(data);
      }
      if (response.error) {
        toast.custom(<NotifyError message='Error while fetchind data .' />)
      }
    }
    fetchData()
  }, []);


  return (
    <div className='text-white'>
      <div className='w-full py-[100px] px-[0px] overflow-y-auto bg-custom bg-center bg-fixed bg-no-repeat bg-cover flex justify-center items-center flex-col'> {/* Removed h-[100vh] and adjusted py */}
        <h1 className='font-bold text-[3rem] m-0 text-white'>Todo list</h1>
        <br /><br /><br />
        {/* ... (your form code) */}
        <Fields />
        <br /><br />
        <div className='main-todo-container w-full p-[10px] flex flex-col gap-[30px] bg-transparent'>
          {/* ... (your todo display code) */}

          <div className='main-todo-container w-full p-[10px] flex flex-col gap-[30px] bg-transparent'>
            {
              todos.map((todo: Todos, idx) => {
                return <TodoCard todo={todo} key={idx} />
              }
              )
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page;