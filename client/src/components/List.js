import { get } from 'mongoose';
import React , {useContext, useEffect} from 'react'
import { ContextGlobal } from '../context/StateGlobal'
import { Transaction } from './Transaction';

export const List = () => {
const {transactions, getTransactions}=useContext(ContextGlobal);

  useEffect(()=>{
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
        <h3>History</h3>
        <ul  className="list">
          { transactions.map( transactions=>( <Transaction key={transactions.id} transaction={transactions}/> ))}
        </ul>
    </>
  )
}
