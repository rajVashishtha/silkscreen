const INITIAL_STATE = {
    admin_active : 0
}

const adminReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_ADMIN_ACTIVE' : 
            return{
                ...state,
                admin_active : action.payload
            }
        default:
            return state
    }
}

export default adminReducer;