import React, { StrictMode } from "react";

import Counter from "./Counter";
import Person from "./Person";
import { Provider as RProvider } from "react-redux";
import { store } from "./redux-state";

const Body = () => (
  <div>
    <h1>Counter</h1>
    <Counter />
    <h1>Person</h1>
    <Person />
  </div>
);

const App = () => (
  <StrictMode>
    <RProvider store={store}>
      <Body />
    </RProvider>
  </StrictMode>
);

export default App;
