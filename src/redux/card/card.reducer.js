const INITIAL_STATE = {
    cards : []
}

const cardReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CARDS_ITEM' : 
            return{
                ...state,
                cards : action.payload
            }
        default:
            return state
    }
}

export default cardReducer;