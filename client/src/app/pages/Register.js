import React, { useState, useEffect } from 'react'
import { registerUser, clearErrors } from '../../actions/userActions'
import { setAlert } from '../../actions/alertAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Register = ({
  isAuthenticated,
  error,
  registerUser,
  clearErrors,
  setAlert,
}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger')
    }
  }, [error, setAlert, clearErrors])

  const { name, email, password, password2 } = user
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (password !== password2) {
      setAlert('Password do not match', 'danger')
    } else {
      registerUser(user)
    }
  }
  if (isAuthenticated) {
    return <Redirect to="/employee-dashboard" />
  }

  return (
    <div>
      <h3>Register Form</h3>
      <form
        onSubmit={onSubmit}
        style={{ width: '300px', display: 'flex', flexDirection: 'column' }}
      >
        <label>Enter Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />

        <label>Enter Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />

        <label>Enter Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          minLength="6"
        />

        <div style={{ marginTop: '20px' }}>
          <input type="submit" value="register" />
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  error: state.users.error,
})

export default connect(mapStateToProps, {
  registerUser,
  clearErrors,
  setAlert,
})(Register)
