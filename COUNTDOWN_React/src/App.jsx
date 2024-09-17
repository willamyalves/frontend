//Router
import { Outlet } from "react-router-dom";

// Hooks
import { useCountdownContext } from "./hooks/useCountdownContext.jsx";

// IMG
import NewYear from "./assets/newyear.jpg";

// CSS
import "./App.css";

function App() {
  const { event } = useCountdownContext();

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className="App"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${NewYear})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
