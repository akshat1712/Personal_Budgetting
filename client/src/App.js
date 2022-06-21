import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/CreditDebit';
import { TransactionList } from './components/List';
import { AddTransaction } from './components/NewTransaction';

import { GlobalProvider } from './context/StateGlobal';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
