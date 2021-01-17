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
  GET_EMPLOYEE,
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

// Get Employee by id Action
export const getEmployee = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/employees/${id}`)
    dispatch({
      type: GET_EMPLOYEE,
      payload: res.data,
    })
    console.log(res)
  } catch (err) {
    dispatch({
      type: EMPLOYEE_ERROR,
      payload: err.response.msg,
    })
  }
}

// Add Employee Action
export const addEmployee = (employee) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post('/api/employees', employee, config)
    dispatch({
      type: ADD_EMPLOYEE,
      payload: res.data,
    })
    console.log(res)
  } catch (err) {
    dispatch({
      type: EMPLOYEE_ERROR,
      payload: err.response.msg,
    })
    let error = { err }
    console.log(error)
  }
}

//Delete employee Action
export const deleteEmployee = (id) => async (dispatch) => {
  console.log('Delete ni')
  try {
    console.log('Delete ni')
    await axios.delete(`/api/employees/${id}`)
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: id,
    })
  } catch (err) {
    dispatch({ type: EMPLOYEE_ERROR, payload: err.response.msg })
  }
}
