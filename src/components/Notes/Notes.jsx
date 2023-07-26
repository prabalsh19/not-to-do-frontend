import axios from "axios";
import { useNotesContext } from "../../context/notes-context";
import { AddNote } from "../AddNote/AddNote";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const Notes = () => {
  const { notes, setNotes, refresh, setRefresh } = useNotesContext();

  const deleteTaskHandler = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/task/remove/${id}`,
        { withCredentials: true }
      );

      setRefresh((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/task/tasks`,
        {
          withCredentials: true,
        }
      );

      setNotes(response.data.tasks);
    })();
  }, [refresh]);

  return (
    <div className="notes-container">
      <AddNote />
      <div className="py-10  flex flex-row flex-wrap justify-center  gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note._id}
              className="relative flex justify-center  items-center w-96 h-96 shadow-lg bg-red-700 text-white font-bold uppercase rounded-lg"
            >
              <span
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => deleteTaskHandler(note._id)}
              >
                <DeleteIcon />
              </span>
              <p className="cursor-default font-roboto">{note.task}</p>
            </div>
          ))
        ) : (
          <h1 className="text-red-700 font-semibold text-2xl">
            Create Your First !Todo
          </h1>
        )}
      </div>
    </div>
  );
};
