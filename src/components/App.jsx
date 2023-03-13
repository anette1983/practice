import { Clock } from "./Clock";

export const App = () => {
  return (
    <>
    <Clock />
    <Clock />
    <Clock />
    </>
  );
};

setInterval(App, 1000);