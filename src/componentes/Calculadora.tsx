import { useState } from 'react';
import './Calculadora.css'

function Calculadora () {
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operador, setOperador] = useState()

  function butoes (e) {
    const input = e.target.value;
    if(number === 0) {
      setNumber(input)
    } else {
      setNumber(number + input)
    }
    
  }

  function operadorHandle(e) {
    const input = e.target.value;
    setOperador(input)
    setOldNumber(number)
    setNumber(0)
  }

  function calculo () {
    if(operador === '+'){
      setNumber(Number(oldNumber) + Number(number))
    }
    if(operador === '-'){
      setNumber(oldNumber - number)
    }
  }

  function clear () {
    setNumber(0)
    setOldNumber(0)
  }

  return(
      <div className="container">
          <div className="div-input">
              <h1>{number}</h1>
          </div>
          <div className="div-button">
              <button value={7} onClick={butoes}>7</button>
              <button value={8} onClick={butoes}>8</button>
              <button value={9} onClick={butoes}>9</button>
              <button onClick={operadorHandle} value={'+'}>+</button>
              <br />
              <button value={4} onClick={butoes}>4</button>
              <button value={5} onClick={butoes}>5</button>
              <button value={6} onClick={butoes}>6</button>
              <button onClick={operadorHandle} value={'-'}>-</button>
              <br />
              <button value={1} onClick={butoes}>1</button>
              <button value={2} onClick={butoes}>2</button>
              <button value={3} onClick={butoes}>3</button>
              <button onClick={calculo}>=</button>
          </div>
          <div className='div-button'>
            <button value={0} onClick={butoes}>0</button>
            <button onClick={clear}>Limpar</button>
          </div>
      </div>
  )
}

export default Calculadora;