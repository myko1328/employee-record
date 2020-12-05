import React from 'react'

const AddEmployee = () => {
  return (
    <div>
      <h1>ADD CONTACT</h1>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>First Name</label>
          <input />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Last Name</label>
          <input />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Phone</label>
          <input />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Salary</label>
          <input />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Status</label>
          <input />
        </div>
      </form>
    </div>
  )
}

export default AddEmployee
