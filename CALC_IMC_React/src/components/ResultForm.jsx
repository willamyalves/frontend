import Button from './Button';
import './ResultForm.css';

const ResultForm = ({imc, setImc}) => {

  const handleBackBtn = (e) =>{
   e.preventDefault();
   setImc("");
  }

  const getInfo = () => {
    if (imc < 18.5) {
      return {situation: "Magreza", color: "yellow"};
    } 
      else if (imc >= 18.5 && imc < 24.9) {
      return { situation: "Normal", color: "green" };

    } else if (imc >= 24.9 && imc < 29.9) {
      return { situation: "Sobrepeso", color: "dark-yellow" };

    } else if (imc >= 30 && imc < 39.9) {
      return { situation: "Obesidade", color: "orange" };

    } else if (imc >= 40) {
      return { situation: "Obesidade grave", color: "red" };

    } else {
      return { situation: "", color: "" };
    }
  }


  return (
    <div className="container-result">
        <h2>Seu IMC: <span className={`imc-span ${getInfo().color}`}>{imc}</span></h2>
        <p className='content-situation'>Situação atual: <span className={getInfo().color}>{getInfo().situation}</span></p>
        <h3 className='watch-classifications'>Confira as classificações</h3>
        <div className="imcTable">
          <div className='titles'>
            <p>IMC</p>
            <p>Classificação</p>
            <p>Obesidade</p>
          </div>
          <div className="lines">
            <p>Menor que 18,5</p>
            <p>Magreza</p>
            <p>0</p>
          </div>
          <div className="lines">
            <p>Entre 18,5 e 24,9</p>
            <p>Normal</p>
            <p>0</p>
          </div>
          <div className="lines">
            <p>Entre 25,0 e 29,9</p>
            <p>Sobrepeso</p>
            <p>I</p>
          </div>
          <div className="lines">
            <p>Entre 30,0 e 39,9</p>
            <p>Obesidade</p>
            <p>II</p>
          </div>
          <div className="lines">
            <p>Maior que 40,0</p>
            <p>Obesidade grave</p>
            <p>III</p>
          </div>
        </div>
        <Button id="back-btn" name={"Voltar"} action={handleBackBtn}/>
    </div>
  )
}

export default ResultForm