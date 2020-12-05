import React, { useState } from 'react'
import { loginUser, loadUser } from '../../actions/userActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = ({ loginUser, isAuthenticated }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()

    loginUser({
      email,
      password,
    })
  }

  if (isAuthenticated) {
    return <Redirect to="/employee-dashboard" />
  }

  return (
    <div>
      <h1>HOME</h1>

      <form onSubmit={onSubmit}>
        <h3>LOGIN</h3>
        <label>Email: </label>
        <input type="email" name="email" value={email} onChange={onChange} />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />

        <input type="submit" value="login" />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
})

export default connect(mapStateToProps, { loginUser })(Home)
