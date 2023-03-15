import React,{createContext, useContext, useReducer} from 'react'

export const StateContext = createContext(); // this is a data layer

//this is a provider

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {console.log(initialState,reducer)}
        {children}
    </StateContext.Provider>
)


//This is how we use inside of a component

export const useStateValue = () => useContext(StateContext);

