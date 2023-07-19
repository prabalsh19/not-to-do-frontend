/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useNotesContext } from "../context/notes-context";

export const Auth = ({ children }) => {
  const { isLogin } = useNotesContext();
  return isLogin ? children : <Navigate to={"/login"} />;
};
