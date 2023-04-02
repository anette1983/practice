
// import Modal from './Modal';
import { useToggle } from './useToggle';


export const UseToggleHook = () => {
  const { isOpen, open, close, toggle } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isOpen && <div>Open!</div>}
      <button onClick={open}>Open</button>
      <button onClick={close}>Close</button>
    </div>
  );
};