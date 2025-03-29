import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const NotifySuccess = ({message}:{message:string}) => {
  return (
    <div className='bg-black/80 w-[70vw] h-auto px-[30px] py-[20px] rounded-[7px] text-white flex flex-row flex-nowrap justify-start items-center gap-[10px]'><FaCheckCircle className='text-green-500'/>{message}</div>  )
}

export default NotifySuccess