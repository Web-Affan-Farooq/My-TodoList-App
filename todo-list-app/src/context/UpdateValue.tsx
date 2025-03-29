"use client";
import React , {createContext, useState}from 'react'
interface Todos {
    id:number;
    todo_title:string;
    todo_description:string;
    completed:boolean;
  }
export const UpdatedValueContext= createContext<[Todos, React.Dispatch<React.SetStateAction<Todos>>]>([{
    id:0,
    todo_title:"",
    todo_description:"",
    completed:false,
}, () => {}]) 
const UpdateValueContextProvider = ({children}:{children:React.ReactNode}) => {

    const [updatedValue, setupdatedValue] = useState<Todos>({
        id:0,
        todo_title:"",
        todo_description:"",
        completed:false,
    });

  return (
    <UpdatedValueContext.Provider value={[updatedValue, setupdatedValue]}>
            {children}
    </UpdatedValueContext.Provider>
  )
}

export default UpdateValueContextProvider