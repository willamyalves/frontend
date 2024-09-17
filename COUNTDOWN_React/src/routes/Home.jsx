// React
import { useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

// Hooks
import { useCountdownContext } from "../hooks/useCountdownContext";

// CSS
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [intervalDateFlux, setIntervalDateFlux] = useState(false);

  const navigate = useNavigate();
  const { setEvent } = useCountdownContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };

    const currentDate = new Date().getTime();

    const selectedDate = new Date(date).getTime();

    const intervalDate = selectedDate - currentDate;

    if (intervalDate < 0) {
      setIntervalDateFlux(true);

      setTimeout(() => {
        setIntervalDateFlux(false);
      }, 5000);

      return;
    }

    setEvent(eventObject);
    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="name"
            placeholder="Digite o título do evento"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a url da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Criar" />
        {intervalDateFlux ? (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Preencha uma data válida
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Home;
