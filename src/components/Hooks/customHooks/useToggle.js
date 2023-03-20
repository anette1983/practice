import useState from "react";

// export const useToggle = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const open = () => setIsOpen(true);
//     const close = () => setIsOpen(false);
//     const toggle = () => setIsOpen(isOpen => !isOpen);
  
//     return { isOpen, open, close, toggle };
//   };

// src/hooks/useToggle.js
export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);
  
    return { isOpen, open, close, toggle };
  };
  
  