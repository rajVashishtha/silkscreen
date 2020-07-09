const INITIAL_STATE = {
    cart : []
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CART_ITEM' : 
            return{
                ...state,
                cartItem : action.payload
            }
        default:
            return state
    }
}

export default cartReducer;