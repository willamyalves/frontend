// React
import { ReactElement } from "react";

// emojis
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

// CSS
import "./Thanks.css";

type ThanksProps = {
  data: {
    name: string;
    review: String;
    comment: string;
  };
};

type EmojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: EmojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div>
      <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>
          A sua opnião é muito importante, em breve você receberá um cupom de
          10% de desconto para a sua próxima compra.
        </p>
        <p>Para concluir a sua avaliação, clique no botão de Enviar abaixo.</p>
        <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
        <p className="review-data">
          <span>
            Satisfação com o produto:{" "}
            {emojiData[data.review as keyof typeof emojiData]}
          </span>
        </p>
        <p className="review-data">
          <span>Comentário: {data.comment}</span>
        </p>
      </div>
    </div>
  );
};

export default Thanks;
