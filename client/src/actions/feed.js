import axios from 'axios'
import {ADD_POST,GET_ERRORS, GET_POSTS, DELETE_POST} from '../actions/types'

export const addPost = postData => dispatch => {
    axios.post('/api/feed', postData)
         .then( res => dispatch({
             type: ADD_POST,
             payload: res.data
         }))
         .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            }))
} 

export const getPosts = () => dispatch => {
    axios.get('/api/feed/all')
         .then( res => dispatch({
             type: GET_POSTS,
             payload: res.data
         }))
         .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            }))
} 
export const deletePost = id => dispatch => {
    axios.delete(`/api/feed/${id}`)
         .then( res => dispatch({
             type: DELETE_POST,
             payload: id
         }))
         .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            }))
} 