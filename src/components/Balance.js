import React , {useContext} from 'react'

import { ContextGlobal } from '../context/StateGlobal'
export const Balance = () => {
  const {transactions}=useContext(ContextGlobal);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>      
        <h4>Your Balance</h4>
        <h1 id="balance">&#8377;{total}</h1>
    </>
  )
}
