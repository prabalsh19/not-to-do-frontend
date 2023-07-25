import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotesContextProvider } from "./context/notes-context.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Auth } from "./auth/auth.jsx";
import { Register } from "./pages/Register/Register.jsx";
import { Notes } from "./components/Notes/Notes.jsx";
import { Search } from "./components/Search/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <App />
      </Auth>
    ),
    children: [
      {
        path: "/",
        element: <Notes />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesContextProvider>
      <RouterProvider router={router} />
    </NotesContextProvider>
  </React.StrictMode>
);
