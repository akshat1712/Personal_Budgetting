import React, {createContext, useReducer} from "react";

import AppReducer from './AppReducer';

import axios from 'axios';
// const state

const initial_state={
    transactions: [],
    error:null,
    loading:true
}


// Create Context
export const ContextGlobal = createContext(initial_state);

// Provided Component
export const ProviderGlobal = ( {children}) =>{
    const [state,dispatch]= useReducer(AppReducer,initial_state);

    // Actions

    async function getTransactions(){
        try{
            const res =await axios.get('/api/v1/transactions');

            dispatch({
                type:"GET_TRANSACTIONS",
                payload:res.data.data
            })
        }catch(err){
            dispatch({
                type:"TRANSACTIONS_ERROR",
                payload: err.response.data.error
            })
        }
    }

    async function deleteTransaction(id){

        try{
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });

        }catch(err){
            dispatch({
                type:"TRANSACTIONS_ERROR",
                payload: err.response.data.error
            })    
        }
    }

    async function addTransaction(transaction){
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const res=await axios.post('/api/v1/transactions',transaction,config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        }
        catch(err){
            dispatch({
                type:"TRANSACTIONS_ERROR",
                payload: err.response.data.error
            })
        }
    }

    return (<ContextGlobal.Provider value = { {
        transactions:state.transactions,
        error:state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </ContextGlobal.Provider>);
}