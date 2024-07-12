import { ADD_TO_CART } from "../Constants"
import { REMOVE_FROM_CART } from "../Constants"
// we will difine action
// Adding to cart function
export const addToCart = (data)=>{
    console.warn("data = ", data)
    return {
        data:data,
        type:ADD_TO_CART
    }
}

// Removing from cart function
export const removeFromCart = ()=>{
    return {
        type:REMOVE_FROM_CART
    }
}