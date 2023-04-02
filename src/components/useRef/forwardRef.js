import { forwardRef, useRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

export const ForwardRef = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};

// Такий підхід дозволяє отримати посилання у батьківському компоненті на DOM-елемент усередині іншого компонента. Наприклад, ви створюєте галерею, так можна отримати посилання на DOM-елементи поза них і працювати з їх властивостями, наприклад використовувати метод Element.getBoundingClientRect() і тому подібне.