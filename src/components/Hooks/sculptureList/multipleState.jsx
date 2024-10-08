import { useState } from 'react';
import { sculptureList } from './data.js';
import './style.css';

export default function SculptireGalleryM() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    // if (index + 1 === sculptureList.length) {
    //   return;
    // }
    if (index + 1 === sculptureList.length) {
      return setIndex(0);
    }
    // або у кнопці: disabled={index + 1 === sculptureList.length}>
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img className="gallery-img" src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
