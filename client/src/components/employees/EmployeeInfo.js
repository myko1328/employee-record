import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEmployee, deleteEmployee } from '../../actions/employeeActions'
import { useHistory } from 'react-router-dom'

const EmployeeInfo = ({ getEmployee, employee, match }) => {
  let history = useHistory()
  useEffect(() => {
    getEmployee(match.params.id)
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      {/* {employee !== null ? (
        <div>
          <p>{employee.firstName}</p>
          <p>{employee.status}</p>
        </div>
      ) : (
        <p>SPINNER</p>
      )}

      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>{employee.salary}</p>
      <p>{employee.status}</p>
      <p>Date Registered: {employee.date}</p>
      <button type="button" onClick={() => history.goBack()}>
        BACK
      </button> */}
      {/* <Row gutter={[16, 16]} style={{ border: '1px solid #dddddd' }}>
        <Col span={4}>picture here</Col>
        <Col span={8}>
          <h1>FULL NAME:</h1>
          <h3>Description</h3>

          <h5>Postal Code</h5>
          <h5>Street Name</h5>
          <h5>Barangay</h5>
          <h5>City</h5>
        </Col>
        <Col span={8}>
          <h5>Phone Number</h5>
          <h5>Email</h5>
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        style={{ border: '1px solid #dddddd', marginTop: '40px' }}
      >
        <Col span={6} style={{ borderLeft: '1px solid #dddddd' }}>
          <h3>Date Hired (to be updated)</h3>
          <h3>ID Number:</h3>
          <h3>Position Title:</h3>
          <h3>Gender:</h3>
          <h3>Marital Status:</h3>
        </Col>
        <Col span={8}>
          <h3>Does employee has SSS:</h3>
          <h3>Does employee has Phil health:</h3>
          <h3>Does employee has TIN:</h3>
          <h3>Does employee has NBI Clearance?</h3>
          <h3>Does employee has Police Clearance?</h3>
          <h3>Does employee has Barangay Clearance?</h3>
        </Col>
        <Col span={8}>
          <h3>SSS ID No.:</h3>
          <h3>Phil Health ID No.:</h3>
          <h3>TIN No.:</h3>
          <h3>NBI No.:</h3>
          <h3>Police Clearance:</h3>
          <h3>Barangay Clearance:</h3>
        </Col>
      </Row> */}
      <h1>INFO</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  employee: state.employees.employee,
})

export default connect(mapStateToProps, { getEmployee })(EmployeeInfo)
