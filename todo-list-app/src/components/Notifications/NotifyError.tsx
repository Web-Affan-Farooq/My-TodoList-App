import React from 'react';
import { MdCancel } from "react-icons/md";

const NotifyError = ({message}:{message:string}) => {
  return (
    <div className='bg-black/80 w-[70vw] h-auto px-[30px] py-[20px] rounded-[7px] text-white flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
     <MdCancel className='text-red-600'/>     
   <span>{message}</span>
    </div>
  )
}

export default NotifyError