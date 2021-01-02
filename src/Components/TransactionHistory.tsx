import { Button } from '@material-ui/core';
import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalContext'

export const TransactionHistory = () => {
    const {transactions,deleteTransaction}=useContext(GlobalContext);
    return (
        <div>
            <hr/>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map((transactions:any)=><li key={transactions.id} className={transactions.amount<0 ? 'minus':'plus'}>
                    {transactions.description}
                 <span className='amount'>{transactions.amount}</span>
                 <Button className="btn"onClick={()=>deleteTransaction(transactions.id)}>X</Button>
                </li>)}
                
            </ul>
        </div>
    )
}
