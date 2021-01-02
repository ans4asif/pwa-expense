import React,{useContext} from 'react'
import {GlobalContext} from './../context/globalContext';

export const Balance = () => {
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map((transactions:any)=>transactions.amount);
    const total=amounts.reduce((a:any,b:any)=>(a+=b),0).toFixed(1);

    return (
        <div >
            <h3 className='balance'>Balance</h3>
            <h1>${total}</h1>
        </div>
    )
}
