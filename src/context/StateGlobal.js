import React, {createContext, useReducer} from "react";

import AppReducer from './AppReducer';
// const state
const initial_state={
    transactions: [

        ]
}


// Create Context
export const ContextGlobal = createContext(initial_state);

// Provided Component
export const ProviderGlobal = ( {children}) =>{
    const [state,dispatch]= useReducer(AppReducer,initial_state);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<ContextGlobal.Provider value = { {
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </ContextGlobal.Provider>);
}