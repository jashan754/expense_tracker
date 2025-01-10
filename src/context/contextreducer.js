export const contextreducer=(state,action)=>{
    let transactions;
    switch(action.type){
        case "ADD_TRANSACTION":
            transactions= [action.payload,...state];
            localStorage.setItem('transactions',JSON.stringify(transactions))
            return transactions;
         case "DELETE_TRANSACTION":
            transactions= state.filter((item)=>item.id!==action.payload);
            localStorage.setItem('transactions',JSON.stringify(transactions))
            return transactions
         default:
             return state;
    }
// i m cute 

}
