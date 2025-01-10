import React, { useReducer, createContext } from "react";
import { contextreducer } from "./contextreducer";
const initialState =JSON.parse(localStorage.getItem('transactions'))|| [];
export const Expensetrackercontext=createContext(initialState);
export const Provider=({children})=>{
    const [transactions,dispatch]=useReducer(contextreducer,initialState);
    const addtransaction=(transaction)=>
    {
        dispatch({type:"ADD_TRANSACTION",payload:transaction});
    }
    const deletetransaction=(id)=>{
        dispatch({type:"DELETE_TRANSACTION",payload:id});
    }
  const balance=transactions.reduce((acc,currval)=>{
    return(currval.type==='Expense'? acc-Number(currval.amount) : acc+Number(currval.amount))
  },0)
   return( <Expensetrackercontext.Provider value={{addtransaction,deletetransaction,transactions,balance}}>
        {children}
    </Expensetrackercontext.Provider>
   );
};