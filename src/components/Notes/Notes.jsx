import { useNotesContext } from "../../context/notes-context";
import { AddNote } from "../AddNote/AddNote";

export const Notes = () => {
  const { notes } = useNotesContext();
  return (
    <div className="notes-container">
      <AddNote />
      <div className="py-10  flex flex-row flex-wrap justify-center  gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note._id}
              className="flex justify-center  items-center w-96 h-96 shadow-lg bg-red-700 text-white font-bold uppercase rounded-lg"
            >
              <p className="cursor-default font-roboto">{note.task}</p>
            </div>
          ))
        ) : (
          <h1>Create your first !todo</h1>
        )}
      </div>
    </div>
  );
};
