// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount(count + 1);
//   }

//   function handleDecrement() {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
// In this version of the component, the handleDecrement function first checks whether the count value is greater than zero before decrementing it. If the count value is already zero, then clicking the "Decrement" button will have no effect.

// I hope this updated example helps! Let me know if you have any other questions.





