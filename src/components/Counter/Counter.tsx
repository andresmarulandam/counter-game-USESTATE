import { useState } from 'react';
import ataque from '../../assets/ataque.png';
import defensa from '../../assets/defensa.png';
import './Counter.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [ultimaAccion, setUltimaAccion] = useState('');

  function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

  const randomNum = getRandomNumber();

  function handleAttack() {
    setCounter((prevCounter) => prevCounter + randomNum);
    setLastNumber(randomNum);
    setUltimaAccion('suma');
  }

  function handleDefense() {
    setCounter((prevCounter) => prevCounter - randomNum);
    setLastNumber(-randomNum);
    setUltimaAccion('resta');
  }
  function handleResetGame() {
    setCounter(0);
  }

  return (
    <div className="counter-container">
      <h1 className="score">Game Score: {counter}</h1>
      <p className="instructions">You win at +20 and lose at -20 points</p>
      <p className="last-play">Last Play:{lastNumber} </p>
      <h3 className="game-status">Game Status:</h3>
      <div className="icons-container">
        <img
          src={ataque}
          onClick={ultimaAccion !== 'suma' ? handleAttack : undefined}
          alt="Attack"
          className="icon attack"
          style={{
            cursor: ultimaAccion === 'suma' ? 'not-allowed' : 'pointer',
            opacity: ultimaAccion === 'suma' ? 0.5 : 1,
          }}
        />
        <img
          src={defensa}
          onClick={ultimaAccion !== 'resta' ? handleDefense : undefined}
          alt="Defense"
          className="icon defense"
          style={{
            cursor: ultimaAccion === 'resta' ? 'not-allowed' : 'pointer',
            opacity: ultimaAccion === 'resta' ? 0.5 : 1,
          }}
        />
      </div>
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
}
