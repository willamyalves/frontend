// Router
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
