import axios from "axios";
import { useState } from "react";
import { useNotesContext } from "../../context/notes-context";

export const AddNote = () => {
  const [task, setTask] = useState("");
  const { setNotes } = useNotesContext();
  const addNoteHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/task/add`,
      { task },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/tasks`,
        {
          withCredentials: true,
        }
      );

      setNotes(response.data.tasks);
    }
    setTask("");
  };
  return (
    <form
      onSubmit={addNoteHandler}
      className="mt-8 w-1/2 m-auto flex rounded-md bg-white shadow-lg overflow-hidden p-2"
    >
      <input
        className="w-full p-2 focus-visible:outline-none "
        type="text"
        placeholder="Add !todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="px-3 bg-red-700 text-white rounded-md border-2 border-red-700 duration-100 hover:bg-slate-100 hover:text-slate-900 hover:font-semibold">
        ADD
      </button>
    </form>
  );
};
