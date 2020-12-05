import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from './Types'
import axios from 'axios'

//Register User Action
export const registerUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post('/api/users', user, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, //Token
    })

    dispatch(loadUser())
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg,
    })
  }
}

//Login User Action
export const loginUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post('/api/auth', user, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, //Token
    })
    dispatch(loadUser())
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    })
  }
}

//Load User Action
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.msg,
    })
  }
}

//Logout Action
export const logout = () => ({ type: LOGOUT })

//Clear Errors
export const clearErrors = () => ({ type: CLEAR_ERRORS })
