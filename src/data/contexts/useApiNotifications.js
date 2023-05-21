import React, { useReducer, createContext } from "react";
import { reducer } from "../reduces/notifications";

export const contextAPI = createContext();

export const initialState = {
    notifications: []
  };

export const APIContextProvider = props => {
    const [api, dispatch] = useReducer(reducer, initialState);
  
    return (
      <contextAPI.Provider value={[api, dispatch]}>
        {props.children}
      </contextAPI.Provider>
    );
  };