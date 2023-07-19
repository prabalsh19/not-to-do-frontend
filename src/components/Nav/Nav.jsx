import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

export const Nav = () => {
  return (
    <nav className="flex justify-between p-4">
      <div className="flex items-center">
        <span className="mr-5 cursor-pointer p-2 rounded-full flex justify-center duration-200  hover:bg-slate-300 ">
          <MenuIcon />
        </span>
        <span className="text-2xl text-red-500 font-bold">!Todo</span>
      </div>
      <div className="w-2/4 px-2 rounded-md shadow-md text-lg flex gap-1 items-center bg-slate-50 ">
        <SearchIcon />
        <input
          className="w-full p-2 bg-inherit focus-visible:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <AccountCircleIcon fontSize="large" />
    </nav>
  );
};
