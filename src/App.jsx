import { Nav } from "./components/Nav/Nav";
import { Notes } from "./components/Notes/Notes";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen leading-relaxed">
      <Nav />
      <Notes />
    </div>
  );
}

export default App;
