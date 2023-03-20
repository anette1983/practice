import { useState, useEffect } from "react";

//   Аналог componentDidUpdate
// У масиві потрібно перерахувати всі залежності ефекту. Запуск і на стадії монтування

export const UseEffectUpdate = () => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      console.log(value);
      console.log("Updating phase: same when componentDidUpdate runs");
    }, [value]);
  
    return <button onClick={() => setValue(value + 1)}>{value}</button>;
  };

export const UseEffectUpdateMore = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
  
    // // ❌ Погано. ESLint покаже попередження
    // useEffect(() => {
    //   console.log(firstValue + secondValue);
    // }, [firstValue]);
  
    // ✅ Добре. Вказані всі залежності, що використовуються всередині ефекту
    useEffect(() => {
      console.log(firstValue + secondValue);
    }, [firstValue, secondValue]);
  
    return (
      <>
        <button onClick={() => setFirstValue(firstValue + 1)}>First: {firstValue}</button>
        <button onClick={() => setSecondValue(secondValue + 1)}>Second: {secondValue}</button>
      </>
    );
  };