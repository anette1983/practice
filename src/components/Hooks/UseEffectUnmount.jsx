import { useEffect } from "react";

// Аналог componentWillUnmount
/*Для того, щоб виконати код при розмонтуванні компонента, або взагалі перед кожним викликом ефекту, повертаємо з useEffect функцію очищення з необхідним кодом. Це і є аналог componentWillUnmount. Так можна знімати обробники подій, зупиняти таймери та скасовувати HTTP-запити.*/

export const UseEffectUnmount = () => {
    useEffect(() => {
      console.log("Mounting phase: same when componentDidMount runs");
  
      return () => {
        console.log("Unmounting phase: same when componentWillUnmount runs");
      };
    }, []);
  
    return;
  };
  