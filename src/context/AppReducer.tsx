export const AppReducer = (state:any,action:any) => {
    switch(action.type){
        case 'Del_Transaction':
        return{
            ...state,
            transactions:state.transactions.filter((transaction:any)=>transaction.id !==action.payload)
        }
        case 'Add_Transaction':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state
            
    };
    
    
}
