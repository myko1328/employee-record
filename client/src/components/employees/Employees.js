import React, { useEffect, Fragment } from 'react'
import { getEmployees } from '../../actions/employeeActions'
import { connect } from 'react-redux'
import EmployeeListItem from './EmployeeListItem'

const Employees = ({ employees, getEmployees }) => {
  useEffect(() => {
    getEmployees()
    //esling-disable-next-line
  }, [])
  return (
    <Fragment>
      {employees !== null ? (
        employees.map((employee) => (
          <EmployeeListItem key={employee._id} employee={employee} />
        ))
      ) : (
        <h1>SPINNER NI</h1>
      )}
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  employees: state.employees.employees,
  loading: state.employees.loading,
})

export default connect(mapStateToProps, { getEmployees })(Employees)
