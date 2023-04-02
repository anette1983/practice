import { useState, useMemo } from "react";

// Метод оптимізації, який використовується для прискорення комп'ютерних програм шляхом збереження результатів викликів функції та повернення кешованого результату при повторенні тих самих вхідних даних. Мемоізована функція «запам'ятовує» результат обчислень відповідний набору аргументів. Наступні виклики з такими самими значеннями аргументів повертають запам'ятаний результат, а не перераховують його.
// Хук useMemo() використовує концепцію мемоізації, тобто повертає пам'ятний (кешований) результат обчислень. Це може покращити продуктивність програми, якщо використовується для запобігання дорогим обчисленням на кожному рендері.

// const memoizedValue = React.useMemo(
  // compute
//   () => computeExpensiveValue(a, b),
//   // deps
//   [a, b]
// );

// Хук приймає два аругменти - анонімну функцію, яка має повернути значення (compute), саме вона буде мемоізована, і масив залежностей (deps). Якщо масив залежностей не вказаний, значення обчислюватиметься на кожному рендері, що повністю анулює зміст використання useMemo().

// При першому рендері компонента викликається функція (compute), запам'ятовується її результат та повертається як результат роботи хука. Якщо за наступних рендерів залежності не змінюються, то хук не викликає функції, а просто повертає збережений результат роботи. Якщо будь-яка залежність змінилася, то хук викликає функцію заново, запам'ятовує нове значення та повертає його.


// export const UseMemo = () => {
//     const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//     const [query, setQuery] = useState("");
  
//     const filteredPlanets = planets.filter(planet => planet.includes(query));
  
//     return (
//       <div>
//         {filteredPlanets.map(planet => (
//           <div key={planet}>{planet}</div>
//         ))}
//       </div>
//     );
//   };


// Щоразу коли зміниться значення planets або query компонент буде відрендерен заново, а значить буде перераховано значення filteredPlanets. І це абсолютно нормально! У такому разі не потрібна жодна мемоізація.

// А тепер уявіть, що компонент <App> містить додатковий стан або отримує якийсь пропс, який ніяк не впливає на планети.

// const UseMemo = ({ someProp }) => {
//     const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//     const [query, setQuery] = useState("");
//     const [clicks, setClicks] = useState(0);
  
//     const filteredPlanets = planets.filter(planet => planet.includes(query));
  
//     return (
//       <div>
//         <div>Some prop: {someProp}</div>
//         <button onClick={() => setClicks(clicks + 1)}>
//           Number of clicks: {clicks}
//         </button>
//         <div>
//           {filteredPlanets.map(planet => (
//             <div key={planet}>{planet}</div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   Щоразу коли зміниться стан clicks або проп someProp, компонент буде відрендерен повторно, що призведе до обчислення filteredPlanets, хоча значення planets та query не змінилися! Оскільки метод filter поверне посилання на новий масив, React сприйме це як абсолютно нові дані та список планет буде відмальовано заново. У такому разі варто мемоізувати обчислення filteredPlanets.

export const UseMemo = ({ someProp }) => {
  // eslint-disable-next-line
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]); 
    // eslint-disable-next-line
    const [query, setQuery] = useState(""); 
    const [clicks, setClicks] = useState(0);

  
    const filteredPlanets = useMemo(
      () => planets.filter(planet => planet.includes(query)),
      [planets, query]
    );
    
  
    return (
      <div>
        <div>Some prop: {someProp}</div>
        <button onClick={() => setClicks(clicks + 1)}>
          Number of clicks: {clicks}
        </button>
        <div>
          {filteredPlanets.map(planet => (
            <div key={planet}>{planet}</div>
          ))}
        </div>
      </div>
    );
  };