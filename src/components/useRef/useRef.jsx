// import { useRef } from "react";

// export const UseRef = () => {
//   const btnRef = useRef();

//   return <button ref={btnRef}>Button with ref</button>;
// };
// Рефи створюються хуком useRef() та прив'язані до React-елементів за допомогою атрибуту ref (скорочення від reference), який зберігатиме посилання на DOM-елемент.

// import { useState, useEffect, useRef } from "react";

// export const UseRef = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде null на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log(btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

// Рефи це не стан, тобто вони не реактивні, тому зміна значення рефа не впливає на оновлення компонента і не викликає ре-рендер.

import { useEffect, useRef } from 'react';

export const UseRef = () => {
  const valueRef = useRef(0);

  useEffect(() => {
    // Виконається лише один раз під час монтування.
    // Наступні оновлення значення рефа не
    // викличуть оновлення компонента
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
    console.log(valueRef.current);
  };

  return <button onClick={handleClick}>Click to update ref value</button>;
};
