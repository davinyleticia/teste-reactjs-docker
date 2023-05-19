//https://daviny.dev/api/test-proz



import React, { useReducer, createContext } from "react";
import {reducer} from "../services/bobs/reducer"

export const contextAPI = createContext();

const initialState = {
    token: {},
    school: [],
    informations: [],
    user:[],
    loading: false,
    mgsErro: null,
  };

export const APIContextProvider = props => {
    const [api, dispatch] = useReducer(reducer, initialState);
  
    return (
      <contextAPI.Provider value={[api, dispatch]}>
        {props.children}
      </contextAPI.Provider>
    );
  };