/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const value = { notes, setNotes, isLogin, setIsLogin };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
