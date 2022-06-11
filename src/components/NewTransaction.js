import React ,{useState,useContext} from 'react'

import { ContextGlobal } from '../context/StateGlobal'
export const NewTransaction = () => {

  const {addTransaction}= useContext(ContextGlobal);
  const [text,setText]=useState("");
  const [amount,setamount]=useState(0);
  const onSubmit = e =>{
    e.preventDefault();

    const NewTransaction= {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(NewTransaction);
  }
  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange= {(event)=>{
            setText(event.target.value);
          }}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            ( Expense: -, Income: + )</label
          >
          <input type="number" value={amount} onChange= {(event)=>{
            setamount(event.target.value);
          }} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}
