// React
import React from "react";
import ReactDOM from "react-dom/client";

// Component
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Countdown from "./routes/Countdown.jsx";

// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Context
import { CountdownProvider } from "./context/CountdownContext.jsx";

// CSS
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "countdown",
        element: <Countdown />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </React.StrictMode>
);
