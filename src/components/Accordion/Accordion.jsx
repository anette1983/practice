import { useState } from 'react';
import './Accordion.css';
import data from './data.js';

export default function AccordionExample() {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((el, i) => (
          <div className="item" key={el + i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{el.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {el.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
