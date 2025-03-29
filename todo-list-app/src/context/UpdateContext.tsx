"use client";

import React, {createContext, useState} from 'react';

export const UpdateContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

const UpdateContextProvider = ({children}:{children:React.ReactNode}) => {
    const [update, setUpdate] = useState(false);
  return (
    <UpdateContext.Provider value={[update, setUpdate]}>
        {children}
    </UpdateContext.Provider>
  )
}

export default UpdateContextProvider;