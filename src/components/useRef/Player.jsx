import { useEffect, useRef, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  };

  return [storedValue, setValue];
};

const Player = ({ source }) => {
  const playerRef = useRef();
  const [currentTime, setCurrentTime] = useLocalStorage(
    'video-current-time',
    0
  );
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  const reset = () => {
    // localStorage.setItem('video-current-time', 0);
    setCurrentTime(0);
    playerRef.current.currentTime = 0;
  };

  useEffect(() => {
    const player = playerRef.current;
    // ПРи монтуванні завантажуємо збережений час
    // const savedTime = localStorage.getItem('video-current-time');

    // const savedTime = currentTime;
    // if (savedTime) {
    //   player.currentTime = parseFloat(savedTime);
    // }

    player.currentTime = currentTime;

    // Повертаємо функцію, що спрацює при розмонтуванні
    return () => {
      // const currentTime = player.currentTime;
      // localStorage.setItem('video-current-time', currentTime);
      setCurrentTime(player.currentTime);
    };
  }, [currentTime, setCurrentTime]);

  return (
    <div>
      <video className="player" ref={playerRef} src={source} controls autoPlay>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset time</button>
      </div>
    </div>
  );
};

export const RenderPlayer = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};
