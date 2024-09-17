import './App.css'
import ImcForm from './components/ImcForm'
import ResultForm from './components/ResultForm'
import { useState } from 'react'

function App() {

  const [imc, setImc] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!weight || !height) return;

    const heightNumber = Number(height.replace(",", "."));

    const imcValue = (weight / (heightNumber * heightNumber)).toFixed(1);
    
    setImc(imcValue);

    console.log(imcValue);
  }

  return (
    <div className='container'>
        { !imc ? <ImcForm calcImc={calcImc}/> : <ResultForm imc={imc} setImc={setImc}/>}
    </div>
  )
}

export default App