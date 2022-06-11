import React, {useContext} from 'react'
import { ContextGlobal } from '../context/StateGlobal'

export const Transaction = (props) => {

  const {deleteTransaction}= useContext(ContextGlobal);
const sign = props.transaction.amount < 0 ? '-' : '+';
  return (
        <li className={props.transaction.amount<0 ? 'minus':'plus'}>
          {props.transaction.text} <span>{sign}&#8377;{Math.abs(props.transaction.amount)}</span><button onClick={()=> deleteTransaction(props.transaction.id)} className="delete-btn">x</button>
        </li>
  )
}
