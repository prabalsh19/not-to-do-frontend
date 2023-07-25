import { useNotesContext } from "../../context/notes-context";

export const Search = () => {
  const { searchResult } = useNotesContext();

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
        <h1 className="text-red-700 font-semibold text-2xl">
          Create Your First !Todo
        </h1>
      )}
    </div>
  );
};
