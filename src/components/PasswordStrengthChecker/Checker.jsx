import React, { useState, useEffect } from 'react';
import {
  hasNumber,
  hasUpperCase,
  hasLowerCase,
  hasSpecialCharacters,
} from '../../services/utils.js';
import styles from './Checker.module.css';

export default function Checker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [progressBarStyles, setProgressBarStyles] = useState({
    width: '10%',
    backgroundColor: 'transparent',
  });

  const handlePasswordChange = e => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  useEffect(() => {
    //calculate strength
    //calculate progress bar styles based on strength
    //strength = length + charactertype

    const updatedProgressBarStyles = {
      backgroundColor: 'red',
    };

    let totalStrength = 0;

    if (password.length >= 3) {
      const strengthByLength = Math.min(6, Math.floor(password.length / 3)); // 1, 2, 3, 4, 5, 6 Max 6
      let strengthByCharacterType = 0;

      if (hasNumber.test(password)) {
        strengthByCharacterType += 1;
      }

      if (hasUpperCase.test(password)) {
        strengthByCharacterType += 1;
      }

      if (hasLowerCase.test(password)) {
        strengthByCharacterType += 1;
      }

      if (hasSpecialCharacters.test(password)) {
        strengthByCharacterType += 1;
      }

      totalStrength = strengthByLength + strengthByCharacterType;
    } else {
      totalStrength = 0;
    }

    updatedProgressBarStyles.width = `${totalStrength * 10}%`;

    if (totalStrength > 8) {
      updatedProgressBarStyles.backgroundColor = 'green';
    } else if (totalStrength > 6) {
      updatedProgressBarStyles.backgroundColor = 'orange';
    }

    setStrength(totalStrength);
    setProgressBarStyles(updatedProgressBarStyles);
  }, [password]);
  return (
    <div>
      <h1>Password Strength Checker</h1>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ ...progressBarStyles }}
        ></div>
      </div>
      <p>The Strength of your Password is {strength} out of 10</p>
    </div>
  );
}
