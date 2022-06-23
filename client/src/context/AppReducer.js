export default (state, action) => {
    switch(action.type) {
      case 'GET_TRANSACTIONS':
        return {
          ...state,
          loading: false,
          transactions: action.payload
        }
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload]
        }
      case 'UPDATE_TRANSACTION':{
        const new_transactions=state.transactions;

        for( const index in new_transactions){
          console.log(new_transactions[index]);
          if( new_transactions[index].text==action.payload.text)
            new_transactions[index]=action.payload;
        }

        console.log(new_transactions);

        return{
          ...state,
          transactions:new_transactions
        }
      }
      case 'TRANSACTION_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }