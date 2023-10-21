import { createContext, useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";

const StateContext = createContext();

export function StateProvider({ children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}
