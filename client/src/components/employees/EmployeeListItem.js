import React from 'react'

const EmployeeListItem = ({ employee }) => {
  const { status, firstName, lastName, email, phone, salary } = employee
  return (
    <div>
      <p>{status}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{salary}</p>
      <span>------------</span>
    </div>
  )
}

export default EmployeeListItem
