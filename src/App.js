// import React, { useReducer } from "react";
import React from "react";

import "./App.css";

// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";

// import ClassCounterOne from "./components/ClassCounterOne";
// import HookCounterOne from "./components/HookCounterOne";

// import ClassMouse from "./components/ClassMouse";
// import HookMouse from "./components/HookMouse";

// import MouseContainer from "./components/MouseContainer";

// import IntervalClassComponent from "./components/IntervalClassComponent";
// import IntervalHookCounter from "./components/IntervalHookCounter";

// import DataFetching from "./components/DataFetching";
// import SinglePostDataFetching from "./components/SinglePostDataFetching";

// import FirstComp from "./components/FirstComp";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import CounterThree from "./components/CounterThree";

// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// import DataFetchingOne from "./components/DataFetchingOne";
// import DataFetchingTwo from "./components/DataFetchingTwo";

import ParentComponent from "./components/ParentComponent";
// export const CountContext = React.createContext();

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassComponent /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <SinglePostDataFetching /> */}
      {/*       
      <UserContext.Provider value={"AJIT BHAIK"}>
        <ChannelContext.Provider value={"Code Whisperer"}>
          <FirstComp />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <p>Count: {count}</p>
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      <ParentComponent />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
