import {REGISTER ,SET_CURRENT_USER,GET_CURRENT_USER} from '../actions/types'
import isEmpty from '../isEmpty'

const initiaState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initiaState, action) {
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                user: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
        return state

    }
}