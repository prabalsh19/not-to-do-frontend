import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, password, email } = formData;
  const registerHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
      { ...formData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };
  const updateInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className=" bg-slate-200 h-screen leading-relaxed">
      <form
        autoComplete="off"
        onSubmit={registerHandler}
        className="w-max pt-36 m-auto flex flex-col gap-5 text-xl"
      >
        <h1 className="text-3xl font-semibold text-center mb-3">Register</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Name</label>
          <input
            required
            onChange={(e) => updateInput(e)}
            value={name}
            name="name"
            className="p-0.5"
            type="text"
          />
        </div>
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
        <button className="bg-red-700 text-white p-1 rounded-md">SUBMIT</button>
        <p>
          Already Have An Account{" "}
          <Link to={"/login"} className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
