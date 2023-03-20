
import ErrorBoundary from "./errorBoundariesExamples/ErrorBoundary"
import { ErrorBound, BuggyCounter } from "./errorBoundariesExamples/ErrorBound";
import { Clock } from "./ComponentLifecycle/Clock";
import Article from "./ArticleList/Article";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import { UseEffectUpdate, UseEffectUpdateMore } from "./Hooks/UseEffectUpdate";
import { UseEffectMount } from "./Hooks/UseEffectMount";
import { UseEffectUnmount } from "./Hooks/UseEffectUnmount";
import { ComplexEffectHook } from "./Hooks/ComplexEffect";
// import { MyComponent } from "./Hooks/customHooks/customHooks";
// import { ComponentA, ComponentB } from "./Hooks/customHooks/customHooks";


export const App = () => {
  return (
    <>
    {/* <MyComponent/> */}
    {/* <ComponentA/>
    <ComponentB/> */}
    <ComplexEffectHook/>
    <br />
    <br />
    <UseEffectUnmount/>
    <br />
    <br />
    <UseEffectMount/>
    <br />
    <br />
    <UseEffectUpdateMore/>
    <br />
    <br />
    <UseEffectUpdate/>
    <br />
    <br />
    <UseEffect/>
    <br />
    <UseState/>
    <br />
    <ErrorBoundary>
      <Clock />
    </ErrorBoundary>
    <Article/>
    
    <Clock />
    <Clock />

    <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br /><br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        <ErrorBound><BuggyCounter /></ErrorBound>
      </div>
    </>
  );
};

setInterval(App, 1000);