import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";

const AddTransaction = () => {
   const [text, setText] = useState("");
   const [amount, setAmount] = useState(0);
   const { addTransaction } = useContext(GlobalContext);

   const handleSubmit = (e) => {
      //first prevent the subitting of form which can refresh the page.
      e.preventDefault();

      //entered text and amount in input
      const newTransaction = {
         id: Math.floor(Math.random() * 10000000),
         text,
         amount: +amount,
      };

      //uses useReducer's dispatch function to add transaction to the transaction list
      addTransaction(newTransaction);
   };

   return (
      <>
         <h3>Add new transaction</h3>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="text">Text</label>
               <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                     setText(e.target.value);
                  }}
                  placeholder="Enter text..."
               />
            </div>
            <div className="form-control">
               <label htmlFor="amount">
                  Amount <br />
                  (negative - expense, positive - income)
               </label>
               <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                     setAmount(e.target.value);
                  }}
                  placeholder="Enter amount..."
               />
            </div>
            <button className="btn">Add transaction</button>
         </form>
      </>
   );
};

export default AddTransaction;
