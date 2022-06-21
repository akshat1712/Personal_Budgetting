import React, {useContext} from 'react';
import { GlobalContext } from '../context/StateGlobal';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}&#8377;transaction.amount</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}