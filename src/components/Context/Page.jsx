import Heading from './Heading.jsx';
import Section from './Section.jsx';


// export default function Page() {
//   return (
//     <Section>
//       <Heading level={1}>Title</Heading>
//       <Heading level={2}>Heading</Heading>
//       <Heading level={3}>Sub-heading</Heading>
//       <Heading level={4}>Sub-sub-heading</Heading>
//       <Heading level={5}>Sub-sub-sub-heading</Heading>
//       <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
//     </Section>
//   );
// }

// if we want multiple headings within the same Section to always have the same size:
// export default function Page() {
//   return (
//     <Section>
//       <Heading level={1}>Title</Heading>
//       <Section>
//         <Heading level={2}>Heading</Heading>
//         <Heading level={2}>Heading</Heading>
//         <Heading level={2}>Heading</Heading>
//         <Section>
//           <Heading level={3}>Sub-heading</Heading>
//           <Heading level={3}>Sub-heading</Heading>
//           <Heading level={3}>Sub-heading</Heading>
//           <Section>
//             <Heading level={4}>Sub-sub-heading</Heading>
//             <Heading level={4}>Sub-sub-heading</Heading>
//             <Heading level={4}>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

// It would be nice if you could pass the level prop to the <Section> component instead and remove it from the <Heading>. This way you could enforce that all headings in the same section have the same size. But how can the <Heading> component know the level of its closest <Section>? That would require some way for a child to “ask” for data from somewhere above in the tree. Context!

// Create a context. (You can call it LevelContext, since it’s for the heading level.)
// Use that context from the component that needs the data. (Heading will use LevelContext.)
// Provide that context from the component that specifies the data. (Section will provide LevelContext.)
// Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.

// First, you need to create the context. You’ll need to export it from a file so that your components can use it:
// Step 2: Use the context 
// Import the useContext Hook from React and your context in Page comp

// Now that the Heading component doesn’t have a level prop, you don’t need to pass the level prop to Heading in your JSX like this anymore:

// export default function Page() {
//   return (
//     <Section level={1}>
//       <Heading >Title</Heading>
//       <Section level={2}>
//         <Heading >Heading</Heading>
//         <Heading >Heading</Heading>
//         <Heading >Heading</Heading>
//         <Section level={3}>
//           <Heading >Sub-heading</Heading>
//           <Heading >Sub-heading</Heading>
//           <Heading >Sub-heading</Heading>
//           <Section level={4}>
//             <Heading >Sub-sub-heading</Heading>
//             <Heading >Sub-sub-heading</Heading>
//             <Heading >Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

// All the headings have the same size because even though you’re using the context, you have not provided it yet. React doesn’t know where to get it!

// If you don’t provide the context, React will use the default value you’ve specified in the previous step.
// Let’s fix this problem by having each Section provide its own context.
// Wrap children in section with a context provider to provide the LevelContext to them


// Using and providing context from the same component 
// Since context lets you read information from a component above, each Section could read the level from the Section above, and pass level + 1 down automatically. 
// With this change, you don’t need to pass the level prop either to the <Section> or to the <Heading>:

export default function Page() {
  return (
    <Section >
      <Heading >Title</Heading>
      <Section >
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Section >
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Section >
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}