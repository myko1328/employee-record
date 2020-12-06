import { combineReducers } from 'redux'
import alertReducer from './alertReducer/alertReducer'
import employeeReducer from './employeeReducer/employeeReducer'
import userReducer from './userReducer/userReducer'

export default combineReducers({
  users: userReducer,
  alerts: alertReducer,
  employees: employeeReducer,
})
