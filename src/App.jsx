import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen leading-relaxed">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
