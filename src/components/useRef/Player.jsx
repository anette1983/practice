import { useRef } from "react";

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div >
      <video className="player" ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

export const RenderPlayer = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};