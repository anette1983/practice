import { LevelContext } from './LevelContext.js';
import { useContext } from 'react';

// export default function Section({ level, children }) {
//     return (
//       <section className="section">
//         <LevelContext.Provider value={level}>
//         {children}
//         </LevelContext.Provider>
//       </section>
//     );
//   }
  

  // The component will use the value of the nearest <LevelContext.Provider> in the UI tree above it.

  export default function Section({ children }) {
    const level = useContext(LevelContext);
    return (
      <section className="section">
        <LevelContext.Provider value={level + 1}>
        {children}
        </LevelContext.Provider>
      </section>
    );
  }