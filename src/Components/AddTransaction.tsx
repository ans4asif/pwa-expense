import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/globalContext';

export const AddTransaction = () => {
    const[description,setDescription]=useState('');
    const[amount,setAmount]=useState('');
    const {addTransaction}=useContext(GlobalContext);

    const onSubmitt=(e:any)=>{
         
             e.preventDefault();
             const newTransaction={
             id:Math.floor(Math.random()*100000),
                 description,
                 amount:+amount
             }
             addTransaction(newTransaction);
    }
    return (
        <div>
            <hr/>
            <h3>Add Transaction</h3>
                <form onSubmit={onSubmitt}>
                <div className="trans-form">
                    <label htmlFor="Description">Description</label>
                    <input type="text"
                     value={description}
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setDescription(e.target.value)}
                     placeholder="Enter description"
                     required
                    />
                    </div>

                    <div className="trans-form">        
                   <label htmlFor="Amount">Amount</label>
                    <input type="number"
                     value={amount}
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAmount(e.target.value)}
                     placeholder="Enter Amount (-ve for expense)"
                     required
                    />
                    </div>
                    <button className="btn" >Add Transaction</button>
                </form>
            </div>

    )
}
