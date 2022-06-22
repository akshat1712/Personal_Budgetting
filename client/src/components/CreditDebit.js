import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateGlobal';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h3 className="money plus">Cash-IN</h3>
          <p className="money plus">&#8377;{income}</p>
        </div>
        <div>
          <h3 className="money minus">Cash-OUT</h3>
          <p className="money minus">&#8377;{expense}</p>
        </div>
      </div>
  )
}
