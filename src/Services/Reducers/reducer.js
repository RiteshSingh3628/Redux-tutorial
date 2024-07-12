// We have to define inital \
import { ADD_TO_CART,REMOVE_FROM_CART } from "../Constants";
const initial_state = {
    cartData:[]
}
// we don't have to import action they directly call themselves internally
export default function cartItems(state = initial_state,action){
    // switch will here perform the data on what action we have choosed 
    switch(action.type){
        case ADD_TO_CART:
            console.warn('reducer',action)
            return[
                //we will return 
                ...state,// current state and cartData will contain new data with all previous data
                {cartData:action.data}
            ]
        case REMOVE_FROM_CART:
            state.pop()
            return[
                ...state

            ]
        default:
            return state
    }
}