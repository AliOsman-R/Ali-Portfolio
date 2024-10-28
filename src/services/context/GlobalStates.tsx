import { createContext, useContext, useState } from 'react';
import {type ContextProps, type GlobalStatesType } from '../../types/types';


export const GlobalContext = createContext<GlobalStatesType | null>(null);
const GlobalStates = ({children}: ContextProps) => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <GlobalContext.Provider value={{activeLink, setActiveLink}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStates



export const useActiveLink = () => {
  const globalContext = useContext(GlobalContext)
  
  if(!globalContext){
    throw new Error("Context error")
  } 
  
  const {activeLink, setActiveLink} = globalContext

  return {activeLink, setActiveLink}
}
