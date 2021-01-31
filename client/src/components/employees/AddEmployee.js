import React, { useState } from 'react'
import { addEmployee } from '../../actions/employeeActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AddEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    salary: '',
    status: 'employee',
  })
  let history = useHistory()

  const { firstName, lastName, email, phone, salary, status } = employee

  const onChange = (e) =>
    setEmployee({ ...employee, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('nakaaadd ug employee sa fe')
    addEmployee(employee)
    // setEmployee({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   salary: '',
    //   status: 'employee',
    // })
    history.push('/employee-dashboard')
  }

  return (
    <div>
      <h1>ADD EMPLOYEE</h1>
      {/* <Divider orientation="left">ADD EMPLOYEE</Divider>
      <Row>
        <Col
          style={{
            padding: '20px 10px 20px 10px',
            marginLeft: '60px',
          }}
        >
          <div style={{ textAlign: 'right', marginBottom: '40px' }}>
            <label>First Name:</label>
          </div>
          <div style={{ textAlign: 'right', marginBottom: '35px' }}>
            <label>Last Name:</label>
          </div>
          <div style={{ textAlign: 'right', marginBottom: '40px' }}>
            <label>Email:</label>
          </div>
          <div style={{ textAlign: 'right', marginBottom: '30px' }}>
            <label>Phone Number:</label>
          </div>
          <div style={{ textAlign: 'right', marginBottom: '30px' }}>
            <label>Salary:</label>
          </div>
          <div style={{ textAlign: 'right', marginBottom: '30px' }}>
            <label>Status:</label>
          </div>
        </Col>
        <Col flex={3} style={{ padding: '20px' }}>
          <form onSubmit={onSubmit}>
            <div style={{ marginBottom: '30px' }}>
              <input
                style={{ width: '50%' }}
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input
                style={{ width: '50%' }}
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input
                style={{ width: '50%' }}
                type="text"
                placeholder="Enter Email Add"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input
                style={{ width: '50%' }}
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={phone}
                onChange={onChange}
              />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input
                style={{ width: '50%' }}
                type="text"
                placeholder="Enter Salary Add"
                name="salary"
                value={salary}
                onChange={onChange}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <input
                type="radio"
                name="status"
                value="employee"
                checked={status === 'employee'}
                onChange={onChange}
              />
              Employee{' '}
              <input
                type="radio"
                name="status"
                value="self-Employed"
                checked={status === 'self-Employed'}
                onChange={onChange}
              />
              Self-employed{' '}
            </div>

            <input type="submit" value="Add Employee" />
            <Link to="/employee-dashboard">
              <button style={{ margin: '10px' }}>Back</button>
            </Link>
          </form>
        </Col>
      </Row> */}
      {/* <h1>ADD EMPLOYEE</h1>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email Add"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Salary</label>
          <input
            type="text"
            placeholder="Enter Salary Add"
            name="salary"
            value={salary}
            onChange={onChange}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h5>Contact Type</h5>
          <input
            type="radio"
            name="status"
            value="employee"
            checked={status === 'employee'}
            onChange={onChange}
          />
          Employee{' '}
          <input
            type="radio"
            name="status"
            value="selfEmployed"
            checked={status === 'Self-employed'}
            onChange={onChange}
          />
          Self-employed{' '}
        </div>

        <input type="submit" value="Add Employee" />
      </form> */}
    </div>
  )
}

export default connect(null, { addEmployee })(AddEmployee)
