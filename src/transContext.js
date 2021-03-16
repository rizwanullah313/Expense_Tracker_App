import { createContext, useReducer } from "react"
import TransactionReducer from './transReducer';
// import React from 'react';
const intialTransactions = [
        //{amount: 500, desc: "Cash"},
        //{amount: -40, desc: "Book"},
        //{amount: -200, desc: "Camera"}
]

 export const TreansactionContext = createContext(intialTransactions);

 export const TreansactionProvider = ({children}) =>{
    let [state, dispatch] = useReducer(TransactionReducer, intialTransactions);

    function addTransaction(transObj){
       dispatch({
           type: "ADD TRANSACTION",
           payload: {
               amount: transObj.amount,
               desc: transObj.desc
           },
       })
    }
    return(
        <TreansactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
         {children}
        </TreansactionContext.Provider>
    )
 }
 export default TransactionReducer;