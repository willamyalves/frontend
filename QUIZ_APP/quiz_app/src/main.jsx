// System
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Context
import { QuizProvider } from "./context/quiz.jsx";

// CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
