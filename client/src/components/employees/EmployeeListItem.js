import React from 'react'
import { Link } from 'react-router-dom'
import { deleteEmployee } from '../../actions/employeeActions'
import { connect } from 'react-redux'

const EmployeeListItem = ({ employee, deleteEmployee }) => {
  const {
    _id,
    status,
    firstName,
    lastName,
    email,
    phone,
    salary,
    date,
  } = employee

  const onDelete = () => {
    deleteEmployee(_id)
  }

  return (
    <div>
      <p>{status}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{salary}</p>
      <p>{date}</p>
      <Link to={`/employees/${_id}`}>View</Link>
      <button onClick={onDelete}>Delete</button>
      <br />
      <span>------------</span>
    </div>
  )
}

export default connect(null, { deleteEmployee })(EmployeeListItem)
