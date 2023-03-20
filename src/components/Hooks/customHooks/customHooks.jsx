// вбудовані React-хуків або готових хуків із бібліотек на кшталт react-use.
// Хук це просто функція, ім'я якої обов'язково починається з приставки use
// import useState from "react";
import Modal from "components/Modal";
import { useToggle } from "./useToggle";


// // ComponentA.jsx
// export const ComponentA = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);
  
//     return (
//       <>
//         <button onClick={openModal}>Open modal</button>
//         <Modal isOpen={isModalOpen} onClose={closeModal} />
//       </>
//     );
//   };
  
//   // ComponentB.jsx
//   export const ComponentB = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);
  
//     return (
//       <>
//         <button onClick={openModal}>Open modal</button>
//         <Modal isOpen={isModalOpen} onClose={closeModal} />
//       </>
//     );
//   };

// //   вище дублювання коду


// // ComponentA.jsx


// export const ComponentA = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// // ComponentB.jsx

// export const ComponentB = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };


// MyComponent.jsx
  
export const MyComponent = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};