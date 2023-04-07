import ErrorBoundary from './errorBoundariesExamples/ErrorBoundary';
import { ErrorBound, BuggyCounter } from './errorBoundariesExamples/ErrorBound';
import { Clock } from './ComponentLifecycle/Clock';
import Article from './ArticleList/Article';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UseEffectUpdate, UseEffectUpdateMore } from './Hooks/UseEffectUpdate';
import { UseEffectMount } from './Hooks/UseEffectMount';
import { UseEffectUnmount } from './Hooks/UseEffectUnmount';
import { ComplexEffectHook } from './Hooks/ComplexEffect';
import Page from './Context/Page';
import ProfilePage from './Context/ProfilePage';
import Images from './Context/Images';
import Counter from './Counter/Counter';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import { UserProvider } from './Context/customProviderComponent/userContextCustom';
import { User } from './Context/User';
import { UseHover } from './Hooks/customHooks/UseHover';
import { UseToggleHook } from './Hooks/customHooks/UseToggleHook';
import { MyComponent } from './Hooks/customHooks/customHooks';
import { UseRef } from './useRef/useRef';
import { RenderPlayer } from './useRef/Player';
// import { ComponentA, ComponentB } from "./Hooks/customHooks/customHooks";
import '../index.css';
import { ForwardRef } from './useRef/forwardRef';
import { UseMemo } from './useMemo/useMemo';
import Checkboxes from './Checkboxes/Checkboxes';
import { Form } from './Forms/Form';
import { Redux } from './Redux/RComponents/Redux';
import { ReduxToolkit } from './ReduxToolkit/RComponents/ReduxToolkit';
import { ReduxToolkitLogin } from './ReduxToolkitLogin/ReduxToolkitLogin';
import { ReduxPersist } from './Redux-persist/RComponents/ReduxPersist';
import { ReduxPersistTodos } from './ReduxPersistTodos/RComponents/ReduxPersistTodos';

export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <h2>Todos with ReduxPersist</h2>
          </Tab>
          <Tab>
            <h2>ReduxPersist</h2>
          </Tab>
          <Tab>
            <h2>ReduxToolkitLogin</h2>
          </Tab>
          <Tab>
            <h2>ReduxToolkit</h2>
          </Tab>
          <Tab>
            <h2>Redux</h2>
          </Tab>
          <Tab>
            <h2>Form</h2>
          </Tab>
          <Tab>
            <h2>Checkboxes</h2>
          </Tab>
          <Tab>
            <h2>UseMemo</h2>
          </Tab>
          <Tab>
            <h2>ForwardRef</h2>
          </Tab>
          <Tab>
            <h2>Player</h2>
          </Tab>
          <Tab>
            <h2>UseRef</h2>
          </Tab>
          <Tab>
            <h2>UseToggleHook</h2>
          </Tab>
          <Tab>
            <h2>UseHover</h2>
          </Tab>
          <Tab>
            <h2>UserProvider</h2>
          </Tab>
          <Tab>
            <h2>WeatherWidget</h2>
          </Tab>
          <Tab>
            <h2>Counter</h2>
          </Tab>
          <Tab>
            <h2>Images</h2>
          </Tab>
          <Tab>
            <h2>ProfilePage</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
          <Tab>
            <h2>Other</h2>
          </Tab>
        </TabList>
        <TabPanel>
          <ReduxPersistTodos />
        </TabPanel>
        <TabPanel>
          <ReduxPersist />
        </TabPanel>
        <TabPanel>
          <ReduxToolkitLogin />
        </TabPanel>
        <TabPanel>
          <ReduxToolkit />
        </TabPanel>
        <TabPanel>
          <Redux />
        </TabPanel>
        <TabPanel>
          <Form />
        </TabPanel>
        <TabPanel>
          <Checkboxes />
        </TabPanel>
        <TabPanel>
          <UseMemo />
        </TabPanel>
        <TabPanel>
          <ForwardRef />
        </TabPanel>
        <TabPanel>
          <div className="player-wrapper">
            <RenderPlayer />
          </div>
        </TabPanel>

        <TabPanel>
          <UseRef />
        </TabPanel>

        <TabPanel>
          <UseToggleHook />
        </TabPanel>
        <TabPanel>
          <UseHover />
        </TabPanel>
        <TabPanel>
          <UserProvider>
            <User />
          </UserProvider>
        </TabPanel>
        {/* Нині значення контексту не динамічне.  */}
        <TabPanel>
          <WeatherWidget latitude="50.4500" longitude="30.5233" />
        </TabPanel>
        <TabPanel>
          <Counter />
        </TabPanel>
        <TabPanel>
          <Images />
        </TabPanel>
        <TabPanel>
          <ProfilePage />
        </TabPanel>
        <TabPanel>
          <MyComponent />{' '}
        </TabPanel>
        {/* <ComponentA/>
        <ComponentB/> */}
        <TabPanel>
          <Page />
        </TabPanel>
        <TabPanel>
          {' '}
          <ComplexEffectHook />
        </TabPanel>
        <TabPanel>
          <UseEffectUnmount />
        </TabPanel>
        <TabPanel>
          <UseEffectMount />
        </TabPanel>
        <TabPanel>
          <UseEffectUpdateMore />
        </TabPanel>
        <TabPanel>
          <UseEffectUpdate />
        </TabPanel>
        <TabPanel>
          <UseEffect />
        </TabPanel>
        <TabPanel>
          <UseState />
        </TabPanel>
        <TabPanel>
          <ErrorBoundary>
            <Clock />
          </ErrorBoundary>
        </TabPanel>
        <TabPanel>
          <Article />
        </TabPanel>

        <TabPanel>
          <Clock />
          <Clock />
        </TabPanel>

        <TabPanel>
          <div>
            <p>
              <b>
                This is an example of error boundaries in React 16.
                <br />
                <br />
                Click on the numbers to increase the counters.
                <br />
                The counter is programmed to throw when it reaches 5. This
                simulates a JavaScript error in a component.
              </b>
            </p>
            <hr />
            <ErrorBoundary>
              <p>
                These two counters are inside the same error boundary. If one
                crashes, the error boundary will replace both of them.
              </p>
              <BuggyCounter />
              <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>
              These two counters are each inside of their own error boundary. So
              if one crashes, the other is not affected.
            </p>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
            <ErrorBound>
              <BuggyCounter />
            </ErrorBound>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

setInterval(App, 1000);
