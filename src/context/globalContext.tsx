import React , {createContext,useReducer} from 'react'
import {AppReducer} from './AppReducer'
export const initialState:any={
    transactions:[
        {id:2,description:'salary',amount:500}
        

    ]
}
export const GlobalContext=createContext(initialState);

export const GlobalProvider = ({children}:any) => {
 const[state,dispatch]=useReducer(AppReducer,initialState);

function addTransaction(transactions:any){
    dispatch({
        type:'Add_Transaction',
        payload:transactions
    }
    );
}

function deleteTransaction(id:any){
    dispatch({
        type:'Del_Transaction',
        payload:id
    }
    );
}
    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            addTransaction,
            deleteTransaction  
            
        }}>

       {children}
        </GlobalContext.Provider>
    )
    
}
