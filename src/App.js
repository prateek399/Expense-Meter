import "./App.css";
import React from "react";
import Header from "./components/header.js";
import Balance from "./components/balance.js";
import IncomeExpenses from "./components/incomeExpenses.js";
import TransactionList from "./components/transactionList.js";
import AddTransaction from "./components/addTransaction.js";
import GlobalProvider from "./context/globalState.js";

function App() {
   return (
      //this will wrap the components i.e children variable in 'globalState file as props
      <GlobalProvider>
         <Header />
         <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
         </div>
      </GlobalProvider>
   );
}

export default App;
