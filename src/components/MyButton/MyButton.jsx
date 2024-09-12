import React, { useState } from 'react';
import FirstButton from './FirstButton';
import SecondButton from './SecondButton';
import ClassButton from './ClassButton';
import BirdSound from 'components/BirdSound/BirdSound';

export default function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <hgroup>
        <FirstButton count={count} handleClick={handleClick} />
        <FirstButton count={count} handleClick={handleClick} />
        <FirstButton count={count} handleClick={handleClick} />
        <SecondButton count={count} handleClick={handleClick} />
        <ClassButton />
        <BirdSound />
      </hgroup>
    </>
  );
}
