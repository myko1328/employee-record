import { EMPLOYEE_ERROR, GET_EMPLOYEES } from '../../actions/Types'

const initialState = {
  employees: null,
  current: null,
  filtered: null,
  error: null,
  loading: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
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
