import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {GET_ERRORS,SET_CURRENT_USER, GET_CURRENT_USER} from '../actions/types'

export const loginUser = (userData) => dispatch => {
    axios
      .post('/api/users/login', userData)
      .then(res => {
        //Save to localStorage
        const {token} = res.data;
        //Set to localStorage
        localStorage.setItem('jwtToken', token);
        //Set token to auth header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
//set current user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
  //remove from local storage
  localStorage.removeItem('jwtToken')
  //remove auth header for future requests
  setAuthToken(false)
  // set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}
