import {combineReducers} from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import feedReducer from './feedReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    posts: feedReducer
})

export default rootReducer