import { useState } from "react";
import styles from './ShowHideTitle.module.css';

export default function App() {
  const [isShown, setIsShown] = useState(true);

  return (
    <div className="App">
      {/* <div className={`content ${isShown ? "hidden" : ""}`}> */}
    <div className={`${styles.content} ${isShown ? styles.hidden : ''}`}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
          {/* <button className="toggle-button" type="button" onClick={() => setIsShown(!isShown)}> */}
          <button className={styles.toggleButton} type="button" onClick={() => setIsShown(!isShown)}>
        {isShown ? "Show" : "Hide"}
      </button>
    </div>
  );
}
