import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EMPLOYEE,
  FILTER_EMPLOYEE,
  CLEAR_FILTER,
  EMPLOYEE_ERROR,
  GET_EMPLOYEES,
  CLEAR_EMPLOYEES,
} from './Types'
import axios from 'axios'

// Get Employees Action
export const getEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/employees')
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: EMPLOYEE_ERROR,
      payload: err.response.msg,
    })
  }
}
