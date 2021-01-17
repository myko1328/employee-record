import React, { useEffect, useState, Fragment } from 'react'
import { getEmployees, deleteEmployee } from '../../actions/employeeActions'
import { connect } from 'react-redux'
import { Table, Space } from 'antd'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
  },
]

const Employees = ({ employees, getEmployees, deleteEmployee }) => {
  useEffect(() => {
    getEmployees()
    //esling-disable-next-line
  }, [])

  const onDelete = (id) => {
    deleteEmployee(id)
  }

  return (
    // <div>
    //   <h1>DASHBOARD</h1>
    // </div>
    <Fragment>
      {employees !== null ? (
        // employees.map((employee) => (
        //   // <EmployeeListItem key={employee._id} employee={employee} />

        // ))
        <Table
          columns={columns}
          dataSource={employees.map((employee) => ({
            key: employee._id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            status: employee.status,
            operation: (
              <Space size="middle">
                <Link to={`/employees/${employee._id}`}>View</Link>
                <a onClick={() => onDelete(employee._id)}>Delete</a>
              </Space>
            ),
          }))}
        />
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

export default connect(mapStateToProps, { getEmployees, deleteEmployee })(
  Employees
)
