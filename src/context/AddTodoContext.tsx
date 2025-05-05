"use client";
import React, {createContext, useState} from 'react';
import { Todos } from '@/@types/Todo';

export const TodoListContext = createContext<[Todos[], React.Dispatch<React.SetStateAction<Todos[]>>]>([[], () => {}]);

const TodoListProvider = ({children}:{children:React.ReactNode}) => {
    const [todoList, settodoList] = useState<Todos[]>([]);
  return (
    <TodoListContext.Provider value={[todoList, settodoList]}>
        {children}
    </TodoListContext.Provider>
  )
}

export default TodoListProvider;