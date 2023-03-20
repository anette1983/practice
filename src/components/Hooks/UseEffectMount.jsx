import { useState, useEffect } from "react";

// Аналог componentDidMount
export const UseEffectMount = () => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      console.log("Mouting phase: same when componentDidMount runs");
    }, []);
  
    return <button onClick={() => setValue(value + 1)}>{value}</button>;
  };