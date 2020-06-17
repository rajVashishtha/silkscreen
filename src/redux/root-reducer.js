import userReducer from './user/user-reducer'
import cardReducer from './card/card.reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    user : userReducer,
    cards : cardReducer
})
