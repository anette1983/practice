import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
    //   const numberToGuess = useRef(Math.floor(Math.random() * 100) + 1); // сохраняем число в useRef
    // или сохраняем в стейт
    const [targetNumber, setTargetNumber] = useState(0);
    
      useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    // Implementation here
  const guessedNum = Number(guess);
    //   if (guessedNum > numberToGuess.current) {
          if(guessedNum > targetNumber) {
              setMessage('Too high!');
               //   else if (guessedNum > numberToGuess.current) {
    } else if (guessedNum < targetNumber) {
      setMessage('Too low!'); 
    } else {
       setMessage('Correct!');
    }
  };

  return (
    <div>
      <h1>Number Guesser Game</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number between 1 and 100"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
