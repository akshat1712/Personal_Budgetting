import React , {useContext} from 'react'
import { ContextGlobal } from '../context/StateGlobal'
import { Transaction } from './Transaction';

export const List = () => {
const {transactions}=useContext(ContextGlobal);

  return (
    <>
        <h3>History</h3>
        <ul  className="list">
          { transactions.map( transactions=>( <Transaction key={transactions.id} transaction={transactions}/> ))}
        </ul>
    </>
  )
}
