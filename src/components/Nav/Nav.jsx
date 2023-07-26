import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useNotesContext } from "../../context/notes-context";

export const Nav = () => {
  const navigate = useNavigate();
  const { setSearchResult, searchQuery, setSearchQuery } = useNotesContext();
  const searchHandler = async (e) => {
    navigate("/search");
    setSearchQuery(e.target.value);
    try {
      if (e.target.value !== "") {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/task/search/${
            e.target.value
          }`,
          { withCredentials: true }
        );
        setSearchResult(response.data.result);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const resetSearch = () => {
    setSearchQuery("");
  };
  return (
    <nav className="flex justify-between p-4">
      <div className="flex items-center">
        <span className="mr-5 cursor-pointer p-2 rounded-full flex justify-center duration-200  hover:bg-slate-300 ">
          <MenuIcon />
        </span>
        <Link to={"/"}>
          <span
            onClick={resetSearch}
            className="text-2xl text-red-500 font-bold"
          >
            !Todo
          </span>
        </Link>
      </div>
      <div className="w-2/4 px-2 rounded-md shadow-md text-lg flex gap-1 items-center bg-slate-50 ">
        <SearchIcon />
        <input
          onChange={searchHandler}
          value={searchQuery}
          className="w-full p-2 bg-inherit focus-visible:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <AccountCircleIcon fontSize="large" />
    </nav>
  );
};
