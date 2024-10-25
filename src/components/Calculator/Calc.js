import { useState, useRef } from 'react';
import './Calc.css';
import LazyImage from 'components/LazyImage/LazyImage';
import Image from '../../assets/gh-actions-perm-1.png';

function Calc() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult(result => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult(result => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult(result => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert('Cannot divide by zero');
    } else {
      setResult(result => result / inputValue);
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>substract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
      <LazyImage src={Image} alt="lazy-load example" />
      <LazyImage src={Image} alt="lazy-load example" />
    </div>
  );
}

export default Calc;
