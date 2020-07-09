import userReducer from './user/user-reducer'
import cardReducer from './card/card.reducer'
import cartReducer from './cart/cart.reducer'
import adminReducer from './admin/admin.reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    user : userReducer,
    cards : cardReducer,
    cartItems:cartReducer,
    admin:adminReducer
})
