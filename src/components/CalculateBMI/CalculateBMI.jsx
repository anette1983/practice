// import React, { useRef, useState } from 'react';
// import './CalculateBMI.css';

// export default function App() {
//   const [BMI, setBMI] = useState(null);
//   const [error, setError] = useState('');
//   const heightRef = useRef();
//   const weightRef = useRef();
//   const handleSubmit = e => {
//     e.preventDefault();

//     setError('');
//     const height = parseFloat(heightRef.current.value) / 100;
//     const weight = parseFloat(weightRef.current.value);

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//       setError('Please enter valid positive numbers for height and weight');
//       setBMI(null);
//       return;
//     }

//     const BMI = (weight / (height * height)).toFixed(2);
//     setBMI(BMI);
//     setError('');
//   };
//   return (
//     <div className="container">
//       <h2>BMI Calculator</h2>
//       <h3>Calculate BMI</h3>

//       <form className="form" onSubmit={handleSubmit}>
//         <label className="form-label">
//           Height in cm
//           <input type="number" placeholder="Enter height" ref={heightRef} />
//         </label>
//         <label className="form-label">
//           Weight in kg
//           <input type="number" placeholder="Enter weight" ref={weightRef} />
//         </label>
//         <button>Submit</button>
//       </form>
//       {BMI !== null && <p>Your BMI is: {BMI}</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// с форм дата:
// import React, {useRef, useState} from 'react';
// export default function App() {
//   const [BMI, setBMI] = useState(null);
//   const [error, setError] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     const data = new FormData(e.target);
//     const height = parseFloat(data.get("height")) / 100;
//     const weight = parseFloat(data.get("weight"));  

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//       setError('Please enter valid positive numbers for height and weight');
//       setBMI(null);
//       return;
//     }

//     const BMI = (weight / (height * height)).toFixed(2);
//     setBMI(BMI);
//     setError("");
//   }
//   return (
//     <div className="container">
//       <h2>BMI Calculator</h2>
//       <h3>Calculate BMI</h3>
      
//       <form className='form' onSubmit={handleSubmit}>
//         <label className='form-label'>
//           Height in cm
//         <input type='number' placeholder="Enter height" name='height'/>
//         </label>
//         <label className='form-label'>
//           Weight in kg
//         <input type='number' placeholder="Enter weight" name='weight'/>
//         </label>
//       <button>Submit</button>  
//       </form>
//       {BMI !== null && <p>Your BMI is: {BMI}</p>}
//       {error && <p>{error}</p>} 
//     </div>
//   );
// }


// useRef - непредсказуемое состояние
// лучше:
import React, { useState } from 'react';
import './CalculateBMI.css';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (
      isNaN(heightInMeters) ||
      isNaN(weightInKg) ||
      heightInMeters <= 0 ||
      weightInKg <= 0
    ) {
      setError('Please enter valid positive numbers for height and weight.');
      setBmi(null);
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setError('');
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height (cm):</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {error && <p className="error">{error}</p>}
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}
