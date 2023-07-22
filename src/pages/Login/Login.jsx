/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotesContext } from "../../context/notes-context";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const { setIsLogin } = useNotesContext();
  const navigate = useNavigate();
  const updateInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
      { ...formData },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      setIsLogin(true);
      navigate("/");
    }
  };
  return (
    <div className=" bg-slate-200 h-screen leading-relaxed">
      <form
        onSubmit={loginHandler}
        autoComplete="off"
        className="w-max pt-36 m-auto flex flex-col gap-5 text-xl"
      >
        <h1 className="text-3xl font-semibold text-center mb-3">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            required
            onChange={(e) => updateInput(e)}
            value={email}
            name="email"
            className="p-0.5"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            required
            onChange={(e) => updateInput(e)}
            value={password}
            name="password"
            className="p-0.5"
            type="password"
          />
        </div>
        <button className="bg-red-700 text-white p-1 rounded-md">LOGIN</button>
        <p>
          Don't Have An Account{" "}
          <Link to={"/register"} className="underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
