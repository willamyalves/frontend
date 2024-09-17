// Components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps.tsx";

// Hooks
import { useForm } from "./hooks/useForm.tsx";

// React
import { useState } from "react";

// Icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// CSS
import "./App.css";
import { FiSend } from "react-icons/fi";

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState<FormFields>(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button
              type="button"
              onClick={() => changeStep(Math.max(currentStep - 1, 0))}
              disabled={currentStep === 0}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              // Se não for a última etapa do formulário, exibe o botão "Avançar"
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              // Se for a última etapa do formulário, exibe o botão "Enviar"
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

export const apiURL = "https://api.openai.com/v1/chat/completions";
