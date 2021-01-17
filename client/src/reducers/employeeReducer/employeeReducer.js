import {
  ADD_EMPLOYEE,
  EMPLOYEE_ERROR,
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../../actions/Types'

const initialState = {
  employee: null,
  employees: [],
  current: null,
  filtered: null,
  error: null,
  loading: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false,
      }
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      }
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
        loading: false,
      }
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee._id !== action.payload
        ),
        loading: false,
      }
    case EMPLOYEE_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
