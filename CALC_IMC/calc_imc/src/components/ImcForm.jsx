
import Button from './Button';
import { useState } from 'react';
import './ImcForm.css';

const ImcForm = ( { calcImc } ) => {

  const [height, setHeight] = useState("");
  const [weight, setweight] = useState("");

  const clearForm = (e) =>{
    e.preventDefault();
    setHeight("");
    setweight("");
  }

  return (
    <div className="container-form">
        <div className="container-form-inside">
          <h1>Calculadora de IMC</h1>
          <form className='form'>
            <label htmlFor="height" id='weight-label'>Altura:</label>
            <input 
            type="number" 
            id='height' 
            name='height' 
            placeholder='Exemplo: 1,75'
            onChange={(e)=> setHeight(e.target.value)}
            value={height}
            />
            <label htmlFor="weight" id='weight-label'>Peso:</label>
            <input 
            type="number" 
            id='weight' 
            name='weight' 
            placeholder='Exemplo: 70,5'
            onChange={(e)=>setweight(e.target.value)}
            value={weight}
            />
            <div className="action-control">
            <Button id="calc-btn" name={"Calcular"} action={(e)=> calcImc(e, height, weight)}/>
            <Button id="clear-btn" name={"Limpar"} action={clearForm}/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default ImcForm