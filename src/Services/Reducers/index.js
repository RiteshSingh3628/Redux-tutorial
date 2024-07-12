// this is root reducer file or index
// we collect all reducers and merge it one single file
import cartItems from "./reducer";
import {combineReducers} from 'redux'

export default combineReducers({
    cartItems
}); 