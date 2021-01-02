import React,{useContext} from 'react'
import {GlobalContext} from './../context/globalContext';

export const AccountSummary = () => {
    const {transactions}=useContext(GlobalContext);

    const amount=transactions.map((transactions:any)=>transactions.amount);
    const income=amount.filter((amount:any)=>amount>0)
                       .reduce((a:any,b:any)=>(a+=b),0)
                       .toFixed(1);
    
    const expense=amount.filter((amount:any)=>amount<0)
                       .reduce((a:any,b:any)=>(a+=b),0)
                       .toFixed(1);

    return (
        <div className="income-expense-tab">
            <div className="income">
                <h3>Income</h3>
                <h2 className="inc">${income}</h2>
            </div>

            <div className="expense">
                <h3>Expense</h3>
                <h2 className="exp">${expense}</h2>
            </div>

        </div>
    )
}
