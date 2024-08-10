import React from 'react';

export default function FirstButton({count, handleClick}) {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
  return (
    <>
      <p>Current count is: {count}</p>
      <button onClick={handleClick}>Button</button>
    </>
  );
}
