import React, { useState, useRef, useEffect } from 'react';

// Custom hook to implement
const usePrevious = (value) => {
    const ref = useRef();
    // создает объект ref, который сохраняет текущее значение между рендерами компонента.
  useEffect(() => {
      ref.current = value || 0;
    //   каждый раз, когда value изменяется, useEffect обновляет текущее значение ref.current. Это происходит после рендера.
  }, [value]);
    return ref.current;
    // возвращает значение, которое было сохранено в ref.current, что фактически является предыдущим значением value.
};

const App = () => {
  const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    // Вначале count инициализируется значением 0.
// usePrevious сохраняет предыдущее значение count в ref.current.
// При каждом нажатии на кнопку "Increment" или "Decrement" значение count изменяется, и компонент рендерится заново.
// Значение previousCount сохраняет предыдущее значение count до обновления.

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
