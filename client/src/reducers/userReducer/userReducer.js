import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../../actions/Types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}
