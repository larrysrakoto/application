import React from 'react';
import { useState, createContext, useContext } from "react";

const Context = createContext()

export const ContextProvider = ({ children }) => {
 
  const [users, setusers] = useState([])

  return (
      <Context.Provider value={{users, setusers}}>
        { children }
      </Context.Provider>

  );
};

export const useMyContext = () =>{
  return useContext(Context);
};