import React, { useReducer, createContext } from "react";
import AppReducer from "./appReducer.js";

const initialState = {
   transactions: [
      { id: 1, text: "Flower", amount: -20 },
      { id: 2, text: "Salary", amount: 300 },
      { id: 3, text: "Book", amount: -10 },
      { id: 4, text: "Camera", amount: 150 },
   ],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   function deleteTransaction(id) {
      dispatch({
         type: "DELETE_TRANSACTION",
         payload: id,
      });
   }

   function addTransaction(transaction) {
      dispatch({
         type: "ADD_TRANSACTION",
         payload: transaction,
      });
   }

   return (
      //the value in this will be stored in GlobalContext object
      <GlobalContext.Provider
         value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};

export default GlobalProvider;
