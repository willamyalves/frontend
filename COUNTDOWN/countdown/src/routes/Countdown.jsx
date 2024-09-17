// Components
import Title from "../components/Title";
import Counter from "../components/Counter";

// Hooks
import { useCountdownContext } from "../hooks/useCountdownContext";

// Router
import { Navigate } from "react-router-dom";

// Hooks
import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
  const { event } = useCountdownContext();

  if (!event) return <Navigate to="/" />;

  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={event.title} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
