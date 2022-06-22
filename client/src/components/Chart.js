import React, { useContext, useEffect } from 'react';


import { GlobalContext } from '../context/StateGlobal';

export const Chart = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data=[]
  for( const transaction of transactions)
    data.push( {"Item":transaction.text,"Amount":transaction.amount});
  
    return (
      <h2>Hello</h2>
    );
}
