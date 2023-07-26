import { useEffect } from "react";
import { useNotesContext } from "../../context/notes-context";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { searchResult, searchQuery } = useNotesContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (searchQuery === "") {
      navigate("/");
    }
  }, [searchQuery]);
  return (
    <div className="py-10  flex flex-row flex-wrap justify-center  gap-4">
      {searchResult.length > 0 ? (
        searchResult.map((note) => (
          <div
            key={note._id}
            className="relative flex justify-center  items-center w-96 h-96 shadow-lg bg-red-700 text-white font-bold uppercase rounded-lg"
          >
            <p className="cursor-default font-roboto">{note.task}</p>
          </div>
        ))
      ) : (
        <h1 className="text-red-700 font-semibold text-2xl">No Notes Found</h1>
      )}
    </div>
  );
};
