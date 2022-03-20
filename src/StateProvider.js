import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//highorder component.used to wrap the app inside the stateprovider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//using the usestate we are pulling
export const useStateValue = () => useContext(StateContext);
