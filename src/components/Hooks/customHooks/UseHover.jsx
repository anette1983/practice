import {useHover} from 'react-use';

export const UseHover = () => {
  const element = (hovered) =>
    <div>
      Hover me! {hovered && 'Thanks!'}
    </div>;
  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
};

/*This code is a React component that demonstrates the use of the useHover hook from the react-use library.

The useHover hook takes a function as its argument, which is used to render the content that should be hovered. In this example, the function element takes a boolean hovered parameter and returns a div element that says "Hover me!" and, if hovered is true, also says "Thanks!".

The useHover hook returns an array with two values: the first value is the hoverable element that needs to be hovered to trigger the hovered state change, and the second value is a boolean hovered variable that is true when the element is being hovered.

The component then renders the hoverable element returned by the useHover hook, along with a separate div element that displays "HOVERED" when the hovered variable is true.

So, when the user hovers over the hoverable element, the hovered state changes and the component re-renders, displaying the "Thanks!" message and the "HOVERED" text.*/

/*In the above code, the hoverable element is the first value returned by the useHover hook. It's the element that needs to be hovered over in order to trigger the hovered state change.

In this particular example, the hoverable element is the result of calling the element function with the current value of the hovered boolean variable returned by the useHover hook. The element function returns a div element with the text "Hover me!" and, if hovered is true, also says "Thanks!".

So the hoverable element initially displays the "Hover me!" message, and if the user hovers over it, the hovered state changes to true, causing the hoverable element to re-render with the "Thanks!" message. */