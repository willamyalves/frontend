import { CountdownContext } from "../context/CountdownContext.jsx";
import { useContext } from "react";

export const useCountdownContext = () => {
  const context = useContext(CountdownContext);

  if (!context) {
    console.log("Não tem context");
    return;
  }

  return context;
};
