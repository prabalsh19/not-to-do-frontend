/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const value = { notes, setNotes, isLogin, setIsLogin, refresh, setRefresh };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
